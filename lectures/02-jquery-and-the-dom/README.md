=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- Students typically have little to no jQuery experience coming into the 301 course, and this is by design. In Code 201, students are taught to manage DOM behaviors through vanilla JavaScript methods on the **document** object.

- Please be sure to navigate through the jQuery [docs](https://api.jquery.com/) at least once, showing how a student should problem solve any task as it relates to the jQuery API. Unfortunately, the docs can be a common source of confusion, so please be sure to clear up how one should approach the examples they provide.

- Today we'll use jQuery for DOM manipulation/traversal only: events are in Class 3. Instruction on the different types of selectors is a key part of the lecture today.

- The blog in the starter code reads data (objects containing blog data) from a variable in blogArticles.js, and then passes each object through a constructor, thereby providing the instances a `.toHtml()` method that uses jQuery to `$.clone()` a template from the DOM and populate it with the specific content of that blog article object.

- This will test what students know about the DOM and about inheritance. It's good to allow time for refresher on those topics, since this day will likely expose gaps in the students' understanding and knowledge.

- There is also a slide deck on Agile that can be utilized (if you like) when covering that topic. It provides a background on code workflow processes and alternate techniques such as Waterfall.

---



## **Week 1: The View**
# Class 2: jQuery and the DOM

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Agile & MVC
1. jQuery
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Describe the different parts of the MVC design pattern.
* Include the jQuery library using a CDN or including it locally.
* Describe the pros and cons of using jQuery.
* Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
* Traverse the DOM tree, with `parents`, `children`, `find`.
* Understand the use of event delegation for dynamic element selection.
* Differentiate between certain methods & the process of chaining.
* Include JavaScript files accounting for dependencies by loading `<script>` tags in order.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li>Wrote our scripts with vanilla JavaScript</li><li>Retreived elements from the DOM using the document object's methods</li><li>Maniuplated the DOM using the document object's methods</li></ul> | <ul><li>Write JavaScript with the help of the jQuery library</li><li>Retrieve elements from the DOM using jQuery</li><li>Manipulate the DOM using jQuery</li></ul> |

<hr></hr>

## Notes
### Topic 1 - Agile and MVC
* Overview
  * Agile Web Development
    * Compared with the ‘Waterfall’ process
    * Importance of stand-ups and pair programming (driver & navigator roles) in relation to this course
    * Daily Sprints
    * ‘MVP’ & ‘Stretch’ Goals
    * User (or project stakeholder) stories & Developer stories
    * Iterative Development
    *. Agile buzzwords (backlog, sprint demos, retrospective, etc)
  * MVC
    * Why do developers care about separating these concerns?
    * What are some other architectural design patterns?
    * What does each MVC layer do?
    * How does each MVC layer tie together in a modern web application?

### Topic 2 - DOM & jQuery / Assignment Prep
* Overview
  * Including jQuery from CDN/locally sourced
  * Vanilla DOM selection & manipulation review
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    * Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    * Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    * Ex:`$(‘.el’).data(‘some-data-attribute’)`- gets the data
    * Ex:`$(‘.el’).data(‘some-data-attribute’, ‘some val’)`- sets the data
  * Basic project setup review
    * Inclusion of reset stylesheet
      * Basic HTML semantics
      * Project structure


## Readings
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)

## Lab
[Lab: jQuery & DOM](https://github.com/cfpdx-301d-spring-2017/lab-02-jquery-and-dom)
