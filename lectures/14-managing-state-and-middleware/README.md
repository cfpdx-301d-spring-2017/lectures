=======
## Overview

- The focus of this class will be the underlying concepts of middleware and how to manage application state, through the use of a routing framework (PageJS). ***State*** is a big concept that is probably fairly new to the students, so be sure to explain it in detail.

- In particular, students should be able to use page.js to attach properties to its `ctx` object, use the `ctx` object to extract URL parameters and resource indicators, and use the provided `next` function, and understand callback chains to create modular and refactored routes.

- There is not a lot of direct linkage between the class demo and the lab today, except that they both involve a deeper exploration of middleware.

- The class [demo](demos/button-builder) is a buildout of an app that allows for designing a custom HTML button with the style attributes and text displayed-in/retrieved-from the URL. It should take the last half of class time, at a minimum.

- You can build as much from scratch as you'd like, depending on time and the interests/needs of the students. Doing a "from-scratch" buildout is a nice way to start the transition to project week for the students after spending the past three weeks in starter code.

- The lab is primarily a commenting lab where students go through and explain how things are working in the blog app. There's been changes since the previous day in how the blog app manages state, and this is the "final" version of the blog app.*



## Resources / Slides
[Starter code repository for class demo](https://github.com/codefellows/301-14-middleware-demo)
[Slides](https://www.icloud.com/keynote/000IXTGU56Elt32vtEl1npMvQ#Code_301_-_Class_14)

---


## **Week 3: The Controller**
# Class Class 14: Middleware

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. New The Controller 1
1. New Topic 2
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
- (will be able to) __________ using _____________.
* Middleware in PageJS router
* Query params in Context


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>


## Notes

**Middleware?!?! What's that?**
  - What is it?
  - Why are we using PageJS?
  - The context object `ctx`, `next()`, and working with multiple callbacks in PageJS
  - Working with URL params

**What other middleware have seen this week?**


## Readings
* [Page.js selections](https://github.com/visionmedia/page.js#context) *(Especially the "Context" and “Routing” sections)*


## Lab
- [Lab 14: Managing State]()
