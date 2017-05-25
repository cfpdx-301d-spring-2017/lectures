## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- The focus of this class should be on teaching students basic functional programming concepts, through the use of the following array methods: `.forEach()`, `.map()`, `.filter()`, and `.reduce()`.

- Students will work with these methods to filter data from their locally sourced JSON file. The goal is to help students understand the concepts of declarative and imperative coding styles, along with understanding concepts such as: higher order functions, immutability, and idempotence.

- Besides the paradigm shift into FP, there is a new piece of ES2015 content: arrow functions. Care must be taken to ensure that the students do not get these two different things confused at all.

- It is recommended that the students write their code and get it working with the "traditional" function syntax, and the refactor piece-by-piece to arrow functions where appropriate. There are also arrow functions sprinkled through the starter code beginning with today's lab that students can look at as a reference.

- The lab is mainly focused on a new admin.html page that displays statistics about the blog (such as word count) that are computed using `.map()` and `.reduce()`. There is also a TODO to create a new Handlebars template for that page, too.*

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[Functional Programming slides](https://www.icloud.com/keynote/0008gukr3pj2ZZ7pGb1bZudeQ#Code_301_-_Class_7)

---


## **Week 2: The Model**
# Class 10: Functional Programming

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
- (will be able to) __________ using _____________.
* Understand advantages of functional programming and reasons for its recent rise in popularity
* Correctly use **.forEach(), .map(), .filter(), .reduce()** methods to explore and modify a data set
* Construct modularity with IIFE patterns


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>

## Notes
* Topic 1 - Functional Programming
    * "Sometimes, the elegant implementation is just a function.  Not a method.  Not a class.  Not a framework.  Just a function."
    * Scope
        * Basics of scoping
    * Closures
        * IIFE
        * Encapsulation
        * The Javascript Module Pattern
    * Declarative vs Imperative code
        * Provide examples of imperative coding
        * Provide examples of declarative programming - using JavaScript array methods like** map, filter**, and **reduce**
    * Stateless (Pure) functions
    * Immutability
        * Provide examples
    * First-class functions
    * **forEach**
        * Demonstrate** forEach** in conjunction with other array methods to filter large data sets
            1. https://gist.github.com/patci/821109b7c578c3f1f676
    * **map**
    * **reduce**
    * **filter**
    * Basics of working with the JavaScript** this** keyword
    * Demo - How
        * Use provided demo code to showcase how to filter through large sets of data
            1. Use the JavaScript console to debug and demonstrate


## Readings

* READ: Js&JQ p 528-543 (Essential)
* [Eloquent JavaScript, Ch.5 Higher Order Function*s](http://eloquentjavascript.net/05_higher_order.html) (Essential)

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 10: Functional Programming](../../labs/10-functional-programming/README.md)
