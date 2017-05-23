=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
- As students are now working within the basic confines of jQuery selection and traversal, the focus of Class 3 should be on introducing the underlying concepts of jQuery-based events, event binding, event delegation, and effects.

- It may be best to include live demos that outline many of the common events and effects, in conjunction with detailing the concepts of how to work with delegated events and dynamically created elements. Be sure to demonstrate how to match element attribute values or text by using `$.on('change')` events and select box filtering.

- jQuery events are a deceptively rich topic: event types, event propagation, delegated events, etc., for students who just two weeks prior were struggling to distinguish clicks between different images in the Code 201  "BusMall" assignment. As with the previous two class days, strive to be attuned to identifying gaps in student knowledge and command of the fundamentals.

- The templating is the same as the previous day using `$.clone()`. The main technical challenges are getting the `<select>` filters populated with authors and categories, and handling the interactivity pieces (tab navigation and the dropdown filters).



## **Week 1: The View**
# Class 3: jQuery and Events 

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. jQuery events
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Create event listeners using jQuery's `$.on()`
* Distinguish when to use event delegation.
* Select and target HTML elements using the `data` attribute.
* Run our scripts when the DOM is ready using `$(document).ready()`


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> used jQuery's data method to add data to elements.</li><li> used the DOM's addEventListener method to listen bind event handlers.</li><li> ran our scripts as soon as they loaded.</li></ul> | <ul><li> use jQuery's data method to update an element's data attributes. </li><li> use jQuery's on method to bind event handlers. </li><li> run our scrips when the document is ready. </li></ul> |




<hr></hr>

## Notes

* jQuery Events
  * Review
      * Vanilla JS events recap (pg. 244)
      * Outline of Demonstrations:
          * Connect the concept of events with the DOM
          * Understand common browser events
          * With jQuery, event listeners should be registered with `$.on()`
          * Many DOM objects can have events attached
          * Events are handled by callback functions
          * Understanding ancestry of the DOM, how to traverse to child nodes (grandchild nodes?)
          * Tabs are a common page idiom that can be implemented with a little jQuery
          * Event handling can be used to override default behavior (like link click, or form submit)
          * Chrome Dev Tools can help debug CSS/JS
      * Site design includes complimentary color choices
  * jQuery events
      * `$.on()`
          * Whiteboard examples
          * Read through the `$.on()` method documentation.
          * Demonstrate use of `$.on()` with and without delegation.
      * click, change/input, scroll
      * Event delegation
          * Discuss dynamically created and inserted elements, event bubbling, and event propagation.
  * Demonstrate event based concepts and code examples
      * These can be found on page 246 of the Duckett textbook.
  * Heavily demonstrate the use of the jQuery `$.data()` method
      * This should include getting data and setting data, and the differing format of jQuery getters/setters
  * Demo - How
      * Demo hand-rolled page tabs
          * Include the new script file.
          * Demonstrate how to invoke a function inside of a `$(document).ready()`
          * fill in the event handler code


## Readings

* JavaScript & jQuery: pages 326-366
  *(Context: 354-361; Essential: 322-353; Reference: 362-366)*



## Lab
[Lab 3: jQuery and events](https://github.com/cfpdx-301d-spring-2017/lab-03-jquery-events)
