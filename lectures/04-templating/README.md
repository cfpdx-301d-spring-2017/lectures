=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- This day will be the first time most students use a templating engine like Handlebars.js - it will be beneficial to convey the importance of using templating to abstract away the tiresome work of DOM rendering.

- Students have likely only worked with static HTML content at this point, so a discussion on dynamic web development and its place in content management systems may help solidify the "why" behind HTML templates and their usage.

- Technical debt has been introduced now that we are going to be replacing some jQuery code that previously built out our templates. Talk about these design choices with the students, and how code can become “brittle” at times.

- This is also the day that the first ES2015 content is introduced ([ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).), and that often becomes a bit of a discussion so that students can be 100% clear that `${someVar}` is NOT jQuery.

- There is also a bonus assignment for RegEx; ideally some lecture time is devoted to the topic and creating some examples.

- Mainly, keeping all of the dollar signs and curly braces clear is the hardest part of the class for the students: jQuery and template literals and Handlebars can start to run together for them.

- There is some legacy content on typography in these materials. The course has evolved a bit to de-emphasize the most technical details; nonetheless, this is a good day to talk about typography fundamentals and its effect on UI/UX.

---


## **Week 1: The View**
# Class 4: Templating

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Typography
1. Templating
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Discuss different ways to reuse HTML, specifically using templates.
* Display data using a Handlebars template.
* Distinguish between the different Handlebars expression types ( **{{}}** vs **{{{}}}** ).
* Add personality to a website by styling the typography.
* Interpolate a variable into a string using ES2015 template literals.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created an HTML element to use as a template. </li><li> Used jQuery to clone our template and create new elements</li><li> Used string concatenation to concatenate a variable to a string. </li></ul> | <ul><li> Use Handlebars.js to compile our template. </li><li> Use ES2015 template literals to interpolate a variable to a string.  </li></ul> |



<hr></hr>

## Notes

#### Topic 1 - Typography

* Typography
    * Fonts
    * Type scale
    * Differences between print fonts and web fonts
    * What signifies a "web safe" font?
    * Serif vs Sans Serif
    * Baseline, x-height, cap height, ascender, descender

#### Topic 2 - Templates
* Overview
    * Discuss how template systems simplify the tedious task of creating elements one by one
    * Discuss how templates provide placeholders for dynamically set data
    * Discuss how expressions are created and how templates are compiled using Handlebars.js
    * Discuss common templating frameworks - both server and client side
* Discuss regular expressions in correlation with their assignment
* Demo
    * Explain basic Regexes
    * Build up to using Handlebars
    * Intro: *<What will we be demoing today?>*
        * What are reusable templates?
        * How is handlebars used to manipulate the DOM?
        * Show how precompiled templates improve runtime
        * How placeholders are used and the functions they are within can assume large amounts of data
        * What is regex?
        * What are other frameworks?
        * Understanding the importance of typography on the web.
        * How to update font styles in order to conform to minimalistic design standards
        * Advanced Chrome dev tools
        * *Styling elements in the elements pane and transferring styles to their blog*

## Readings
* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)
* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)

## Lab
[4: Templating](https://github.com/cfpdx-301d-spring-2017/lab-04-templating)

