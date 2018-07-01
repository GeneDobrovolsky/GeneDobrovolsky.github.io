---
title: "My workflow"
summary: "For those who may need to work with me and just fellow designers"
date: 2016-01-03T17:15:04+02:00
draft: false
markup: mmark
---

<div class="alert alert-warning" role="alert"> 
<h4 class="alert-heading">Update coming soon</h4>In the last two years my process has slightly changed
</div>

This post is largely about Product Design. If you are not sure what it is exactly, [Eric Eriksson](https://medium.com/@ericeriksson) has your back with [What is Product Design?](https://medium.com/@ericeriksson/what-is-product-design-9709572cb3ff). In a sentence, it’s about understanding the problem, designing a solution, shipping it and iterating until it solves the problem. It’s quite brief, so, in a way, it is just another boring sketches and mockups iteration article of which there’s a good number on Medium. Nevertheless, this is what I want to write about in details, because it’s my workflow and I think people I might work with could really use it.

### 1 Starting with a text document
Normally, it’s not the case, but sometimes there’s no document outlining the product (e.g., I am the founder and haven’t got around to it yet). To be able to clearly understand what I’m dealing with, it’s important for me to have things laid out:

- Problem 
- Product concept
- Who are the users?
- Distinctive features
- Business model
- Marketing strategy, competitors
- Advantages, etc.

I remember myself coming back to such document over and over, on several projects. It just helps shape up the basic ideas of how the product should look and feel to start making informed decisions at the earliest stages of development.

There’s also **research** that fits somewhere in between this and the next step, but it’s a way too often written about and pretty generic topic, so I’ll just skip it.

### 2 Ideation, sketches
Sketching on a piece of paper is probably the fastest way to quickly lay out numerous ideas, visualise them and see if they are any good and whether they add up to a design concept.

{.col-8}![](/images/post_1/2.jpeg)

### 3 Wireframes, user flows
To make the process of coming up with first designs easier and less free-form I like to put together possible UI elements and schematic content in a wireframe. I prefer to use tools like MindNode, Precursor (good for wireframing, sketching, and brainstorming for teams) or most often Sketch.

{.col-8}![](/images/post_1/3.png)
{.col-8}![](/images/post_1/4.jpeg)

### 4 First designs, a few drafts
I’m working in drafts. It usually takes 2–3 drafts to be ready to start with the design people will see.
##### Draft 1
It starts with around 10 screens. I don’t bother about the quality of content, using pre-made sets of icons from Iconfinder. Just copying anything I can.

{.col-8}![](/images/post_1/5.jpeg "draft_1.sketch")

Basically, I’m trying to bootstrap it by making use of the men-hours and experience of people who dealt with the same kind of problem or simply made something that I can reuse. There’s nothing bad or wrong about it, because it’s just an early explorations stage and the final thing just never ends up being the same. It’s faster that way.

##### Draft 2
Around 20 screens, also very rough.

{.col-8}![](/images/post_1/6.jpeg "draft_2.sketch")

Some custom UI elements start to appear. I’m still figuring out how the navigation should work, trying different layouts without getting into details. In case there’s an idea that needs verification and simply trying to imagine it isn’t enough, prototyping kicks in. Although, I don’t push code to production, I have some front-end background and it allows me to prototype with Framer.js, which is terrific!

{.col-8}![](/images/post_1/7.png "Play with it in browser")

An important part of the whole process is collaboration with development team. It’s something I really care about and want as much as it is necessary in my workflow. However, there were cases with agencies when they didn’t like the idea as much, and would only dedicate a specific amount of time a week or come up with other reasons not to do so, which sucked.

> “The absolute last thing you want is to go off to your design cave for a few weeks and shock your team with designs that can’t actually be built for one technical reason or another.” — [Paul Stamatiou](https://medium.com/@stammy), Designer at Twitter.

##### Draft 3
About 30 screens.

{.col-8}![](/images/post_1/8.jpeg "draft_3.sketch")

Everything is laid out in a way that makes sense with navigation and interaction in mind. I’m still testing some ideas in Framer Studio. The design now contains a set of rough custom icons. The UI elements are more or less defined, but need to be organised so as to be modular and reusable.

### 5 Marvel or Invision prototype
I’m just linking all the exported static screens from Sketch (there’s a plugin that makes this process a pleasure, including every next design update). I’m just drawing squares on screens, defining actions on them and linking to other screens. That’s the first thing that people can lay their hands on.

{.col-8}![](/images/post_1/15.png)

It becomes a medium for further communication of design changes, because tools like [Marvel](https://marvelapp.com) and [InVision](https://www.invisionapp.com) allow for collaboration, user-testing, it’s recording and a lot of other cool stuff.

{.col-12 .px-0}![](/images/post_1/16.png)

### 6 Framer.js prototypes
Any custom interactions that might play an important role in how the app is structured (e.g. a very specific navigation for a specific type of content that defines the layout) should be tested, preferably in a short period of time and low cost. Plus there are performance issues. This is where tools like Principle or [Framer](https://framer.com) (although, there are many more) come in very handy.

> “And of course one thing’s for sure: putting a real prototype in front of your team is the best form of communication.” — [Paul Stamatiou](https://medium.com/@stammy)

With that done, I can talk to developers.

{.col-8}![](/images/post_1/17.png "You can play in browser with the one above here and another one here")

I usually prototype one thing at a time and I’m not trying to have beautiful code, so it doesn’t take a lot of time, which is great. Normally, it’s under 100 lines. Oftentimes there are bugs, but as long as the idea is communicated, I’m good. But that only goes for minor features. For stuff like [Twitter Video](https://blog.twitter.com/2015/now-on-twitter-group-direct-messages-and-mobile-video-capture) it’s a totally [different story](http://paulstamatiou.com/twitter-video/).
I’ve yet to learn a lot, because I don’t feel as much freedom as Framer.js allows one, but it’s not gonna be like that forever.

### 7 Production design
Production design contains all kinds of stuff needed to start building the front-end in an organised, effective and future-proof manner. The designs normally contain:

##### 01 Grid system

![](/images/post_1/9.jpeg)
![](/images/post_1/10.jpeg)

##### 02 Set of UI elements

![](/images/post_1/11.jpeg)

##### 03 Screens and views for phones, tablets, laptops and, when needed, desktops

{.col-8}![](/images/post_1/12.jpeg)
{.col-8}![](/images/post_1/13.jpeg)

The screen count gets to about 150 screens. It really becomes hard to manage that many screens, while still having them in one document to be able to take advantage of shared styles and symbols. Luckily, it’s still possible in Sketch with its pages and artboards. Love Sketch for that, but there’s still room to improve.

![](/images/post_1/14.jpeg)

### Finally
My plan is to take it to the next level. So, as I go on to every new project I’m going to add more of User Research data into the process and definitely more prototyping. A lot more. The process of designing applications has become so much more informed with such powerful prototyping tools… I’m excited!

