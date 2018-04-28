---
title: "Styleguide from MD"
summary: "A collection of simple markdown UI elements"
date: 2018-02-08T18:51:04+02:00
draft: true
markup: mmark
---

---
# h1. Markdown heading
## h2. Markdown heading
### h3. Markdown heading
#### h4. Markdown heading
##### h5. Markdown heading
###### h6. Markdown heading
---
# {.display-1}<h1>h1. Display 1</h1>
# {.display-2}<h1>h1. Display 2</h1>
# {.display-3}<h1>h1. Display 3</h1>
# {.display-4}<h1>h1. Display 4</h1>
---
~~This line of text is meant to be treated as deleted text.~~

_This line of text will render as underlined_

**This line rendered as bold text.**

This line rendered as *italicized* text.

---

This is an H1
=============

This is an H2
-------------

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
    
---

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
    
---

*   A list item with a code block:

        <code goes here>
        
---

This is a normal paragraph:

    This is a code block.

---

Use the `printf()` function.

---

1. Ordered list item
2. Ordered list item
3. Ordered list item

---

- [ ] Unfinished task list item
- [x] Finished task list item

---

* First level
    * Second level

1. First level
    1. Second level

* First level unordered list item
    1. Second level ordered list item

---

> A quoted paragraph
>> A quoted paragraph inside a quotation

---

    This is a code block

```
This is a fenced code block
```

---

Some text with a footnote[^1].
…
[^1]: The linked footnote appears at the end of the document.

---

Some text with a footnote[^This is the footnote itself.].

---

|Header |Column 1 | Column 2 | Column 3  | 
|:--- |:---- |:----:| ----:|
|1. Row| is | is | is  |
|2. Row| left | nicely | right  |
|3. Row| aligned | centered | aligned  | 

---

When you do want to insert a <br /> break tag using Markdown, you end a line with two or more spaces, then type return.

---

An example of math within a paragraph --- \\({e}^{i\pi }+1=0\\)

Or use dollar signs instead --- ${e}^{i\pi }+1=0$

---

To show an expression by itself:

\\[ {x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a} \\]

or:

$${x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a}$$

---

=(2 + 2)

