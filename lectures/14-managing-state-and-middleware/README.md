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
1. Middleware and more PageJS
1. Lab Prep

### Announcements
* Feedback review
  * Pair programming on portfolio = super helpful.
  * Last week was a lot! This whole experience is introducing a lot of information.
    * and yet, some people want more (:
  * My bad for rushing Friday.
  * Thanks for being understanding -
    * this process is challenging. 
    * we have a lot to cover which means not giving everything the time it deserves.
    * using jargon and terminology is important and just plain old useful.
  * Maybe not so many bullet point slides and also maybe more review days.
* TEAMS!
````
    Team Yellow: Haley, Andrew, John, Anwar
    Team Cyan: Mark, Joe, Michele
    Team Magenta: Stephanie, Meryl, Pierre
````
* TEAM BUILDING EXERCISE(s) (sort of)!
  * "I don't know" and "That's not me"
  * 1 minute presentation
* Questions?

<hr></hr>

## Learning Objectives
* Understand how our PageJS router is middleware
* Use PageJS context object to get query params
* Use PageJS context object to save state


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Did not save the state of our app. | Save the state of our app using PageJS context. |

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
- [Lab 14: Managing State](https://github.com/cfpdx-301d-spring-2017/14-managing-state-and-middleware)
