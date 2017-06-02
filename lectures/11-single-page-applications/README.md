=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- Using page.js as a demonstration tool, you will guide students through route-based functionality to create a more performant and modular single page web application.  These routes should be simple, with a single callback that hands off control to the controller, which will call the appropriate method(s) to render the page to the DOM.

- This week brings another big paradigm change with the lab starter code being completely reorganized such that the scripts/ directory now has subdirectories for the controller/, model/, and view/ scripts, and with some functionality/methods being relocated. Be sure to provide an overview.

- On this day it is important to make sure the students are clear about when a server request is being made versus when the routing is intercepted and handled in the browser. It's pretty confusing for students at first. It helps to liken routing to JS event handling: the route is the listener, and the callback is the handler.

- There's definitely some ongoing cognitive dissonance for students about how we are finding new ways to blur the separation of concerns, in this case offloading some of the Controller responsibilities into the View layer. Be ready for questions and to provide explanations.

- Don't forget to show the similarities between PageJS and Express, especially that they were made by the same organization (VisionMedia and TJ Holowaychuk) and intended to work together smoothly.

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[Starter code repository for class demo](https://github.com/codefellows/301-11-page-js-demo)

[SPA slides](https://www.icloud.com/keynote/000pe4si8HifQY3qxBLLIrysw#Code_301_-_Class_11)

## **Week 3: The Controller**
# Class 11: Single Page Applications & Client-Side Routing

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. New Topic 1
1. New Topic 2
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Identify useful urls for an app, and be able to implement those routes given the new library presented.
* Recognize other server technologies such as node, new dependencies

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>

Topic 1 - Review
    * Pair assignment Retrospective
        * What went well?
        * What was challenging?
* Topic 2 - Routing and Controllers
    * Single-Page Apps
        * Review: Why single page?
            * Performance trade-offs
            * User experience
        * jQuery’s role so far
            * Event handling for our tabs
            * Will still be hiding and showing content
        * Benefits of adding a ‘route’ to our page
            * Lets user (and browser) believe they are navigating
            100. Updates History API to allow for ‘forward’ and ‘back’ actions
    * Demo - How
        * Showcase the History API in the console
            * history is just an object
            * It has a length property
                * Head to another page
                * Check the history length again
                * Now use some methods like ‘go’ ‘forward’ and ‘back’
            * length will update based on pushState
            * It cannot be directly modified!
        * Client-side routing
            * How to use page.js
            * Docs!
        * How to separate controller code for each resource.



## Readings
* JS&jQ: 424-427 (History API) (Essential)
* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)
* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)

## Lab
[Lab 11: Single Page Applications & Client-Side Routing]()
