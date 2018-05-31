---
title: "Block-Sparse GPU Kernels"
summary: "We’re releasing highly-optimized GPU kernels for an underexplored class of neural network architectures: networks with block-sparse weights"
date: 2018-02-13T18:26:17+02:00
draft: true
markup: mmark
---

The development of model architectures and algorithms in the field of deep learning is largely constrained by the availability of efficient GPU implementations of elementary operations. One issue has been the lack of an efficient GPU implementation for sparse linear operations, which we’re now releasing, together with initial results using them to implement a number of sparsity patterns. These initial results are promising but not definitive, and we invite the community to join us in pushing the limits of the architectures these kernels unlock.

{.col-7}![](/images/post_12/1.png "Dense layers \(left\) can be replaced with layers that are sparse and wide \(center\) or sparse and deep \(right\) while approximately retaining computation time.")

Sparse weight matrices, as opposed to dense weight matrices, have a large number of entries with a value of exactly zero. Sparse weight matrices are attractive as building blocks of models, since the computational cost of matrix multiplication and convolution with sparse blocks is only proportional to the number of non-zero blocks. Sparsity enables, for example, training of neural networks that are much **wider and deeper** than otherwise possible with a given parameter budget and computational budget, such as LSTMs with [tens of thousands of hidden units](https://blog.openai.com/block-sparse-gpu-kernels/#small-world). (The largest LSTMs trained today are only thousands of hidden units.)

### The Kernels

{.col-7}![](/images/post_12/2.png "Visualization of dense \(left\) and block-sparse \(center\) weight matrices, where white indicates a weight of zero.")

The kernels allow efficient usage of block-sparse weights in fully connected and convolutional layers (shown above). For convolutional layers, the kernels allow for sparsity in input and output feature dimensions; the connectivity is unaffected in the spatial dimensions. The sparsity is defined at the level of blocks (right figure above), and have been optimized for block sizes of 8x8 (such as in this example), 16x16 or 32x32. At the block level, the sparsity pattern is completely configurable. Since the kernels skip computations of blocks that are zero, the computational cost is only proportional to the number of non-zero weights, not the number of input/output features. The cost for storing the parameters is also only proportional to the number of non-zero weights.

![](/images/post_12/3.png "Speed-up factor for various levels of sparsity, compared to cuBLAS, when used with a wide state \(12288 hidden units\), block size of 32x32 and minibatch size of 32. Comparison was done on a NVIDIA Titan X Pascal GPU with CUDA 8. Speed-ups compared to cuSPARSE were even larger for the tested levels of sparsity.")

### Using The Kernels

Below we show some example code for performing sparse matrix multiplication in Tensorflow.

```
from blocksparse.matmul import BlocksparseMatMul
import tensorflow as tf
import numpy as np

hidden_size = 4096
block_size = 32
minibatch_size = 64

# Create a (random) sparsity pattern
sparsity = np.random.randint(2, size=(hidden_size//block_size,hidden_size//block_size))

# Initialize the sparse matrix multiplication object
bsmm = BlocksparseMatMul(sparsity, block_size=block_size)

# Input to graph
x = tf.placeholder(tf.float32, shape=[None, hidden_size])

# Initialize block-sparse weights
w = tf.get_variable("w", bsmm.w_shape, dtype=tf.float32)

# Block-sparse matrix multiplication
y = bsmm(x, w)

# Run
sess = tf.InteractiveSession()
sess.run(tf.global_variables_initializer())
result = sess.run([y], feed_dict = {x: np.ones((minibatch_size,hidden_size), dtype='float32')})
print(result)
```

### Small-World LSTMs

One particularly interesting use of block-sparse kernels is to use them to create small-world neural networks. [Small-world graphs](https://en.wikipedia.org/wiki/Small-world_network) are connected in such a way that any two nodes in the graph are connected via a small number of steps, even if the graph has billions of nodes. Our motivation for implementing small world connectivity, is despite having a high degree of sparsity, we still want information to propagate quickly through the network. Brains [display small-world connectivity patterns](https://www.ncbi.nlm.nih.gov/pubmed/17079517), which prompts the question whether the same property can improve the performance of LSTMs. Using small-world sparse connectivity, we efficiently trained LSTMs with almost twenty thousands hidden units, 5 times wider than a dense network with similar parameter counts, improving results on generative modeling of text, and semi-supervised sentiment classification; see [our paper](https://s3-us-west-2.amazonaws.com/openai-assets/blocksparse/blocksparsepaper.pdf) for more details.

![](/images/post_12/4.gif "In small-world graphs, even with high degrees of sparsity, nodes are connected in in small number of steps. The animation above shows spreading activation from the center node \(pixel\) in a two-dimensional Watts-Strogatz small-world graph, stochastically smoothed for aesthetic purposes. In this graph, the average path length between nodes is less than 5, similar to the Barabasi-Albert graphs used in our LSTM experiments.")

### Sentiment Representation Learning

Following the setup we used in our [sentiment neuron experiment](https://blog.openai.com/unsupervised-sentiment-neuron/), we trained LSTMs with approximately equivalent parameter counts and compared models with dense weight matrices against a block-sparse variant. The sparse model outperforms the dense model on all sentiment datasets. Our sparse model improves the state of the art on the document level IMDB dataset from 5.91% error ([Miyato et al, 2016](https://arxiv.org/abs/1605.07725)) to 5.01%. This is a promising improvement over our [previous results ](https://blog.openai.com/unsupervised-sentiment-neuron/)which performed best only on shorter sentence level datasets.

{.col-7}![](/images/post_12/5.png "Sentiment classification error \(%\) of linear models trained on the features of dense and sparse generative models with approximately equivalent total parameter counts.")

### Compression results

By using sparse and wide LSTMs, the bits-per-character results in our experiments dropped from 1.059 to 1.048, for equal parameter counts (~ 100 million). Architectures with block-sparse linear layers can also improve upon results obtained with densely connected linear layers. We performed a simple modification of the [PixelCNN++](https://github.com/openai/pixel-cnn) model of CIFAR-10 natural images. A replacement of regular 2D convolutional kernels with sparse kernels, while deepening the network but keeping the rest of the hyper-parameters fixed, lead to a drop in the bits-per-dimension from 2.92 to 2.90, now state of the art on this dataset.

### Research directions

Here we list some suggestions for future research.

- Most weights in neural networks [can be pruned after training has finished](https://arxiv.org/abs/1710.09282). How much wall-clock time speed-up is possible at inference time when using pruning together with these kernels?
- In biological brains, the sparse structure of the network is [partially determined during development](https://en.wikipedia.org/wiki/Synaptic_pruning), in addition to connection strengths. Can we do something similar in artificial neural networks, where we use gradients to not only learn the connection weights, but also the optimal sparsity structure? A recent paper proposed a method for learning [block-sparse RNNs](https://arxiv.org/abs/1711.02782), and we recently proposed an algorithm for [L0 regularization in neural networks](https://arxiv.org/abs/1712.01312), which can be used towards this end.
- We trained [LSTMs with tens of thousands of hidden units](https://blog.openai.com/block-sparse-gpu-kernels/#small-world), leading to better models of text. More generally, sparse layers make it possible to train models with huge weight matrices but the same number of parameters and the same computational cost as their smaller dense counterparts. What are application domains where this will make the most difference to performance?

