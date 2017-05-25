=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- During this class, you will focus on teaching students the underlying concepts of how the web works and all of the associated terminology.

- Starting with an introduction to the WRRC (web request response cycle), you will demonstrate how HTTP works and how to accomplish simple GET requests through the use of jQuery.

- Students will need to understand the 3 major parts of every request (url, method, headers) and the 3 major parts of every response (status, headers, body) and also use live-server or equivalent to receive the full benefits.

- You can demonstrate these concepts directly in the browser and talk through debugging techniques by showing the WRRC components, in real time, in the "Network" tab of Chrome’s developer tools.

- Discuss what AJAX is and how it works, the different AJAX options offered by jQuery, and how AJAX can be used to load locally-stored JSON, which is what is happening in today's lab.

- By Wednesday, students will be seeing a server that updates a PostgreSQL database, so, things are about to start happening fast. A solid foundation today is critical to the success of the entire week.

- Note that the content of the blog has completely changed from where it was on Day 5, and is now being loaded from data/hackerIpsom.json. There is some new functionality added to article.js to handle the AJAX call, and also caching the results into local storage.

- One more thing: ES2015 syntax for variable declarations! `let` and `const` join the party.


## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

* [AJAX & JSON slides](https://www.icloud.com/keynote/000jn1PkD7HgZTb52it73f1Pg#Code_301_-_Class_6)

* [HTTP Status Cats](https://www.flickr.com/photos/girliemac/sets/72157628409467125/)

---

## **Week 2: The Model**
# Class 6: AJAX & JSON

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
* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.
* Explain how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
* Analyze the localStorage object

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>

## Notes

Topic 1 - Using AJAX
    * What
    * Why
    * How
    * JSON with AJAX
        * Follow examples from CH 8 code
    * Demo - How
        * Load blogArticles as JSON
        * convert to JSON
        * Load Async
        * Fix async issues
        * cache
        * conditionally reload based on eTag
        * Understanding why/how AJAX is used.
        * Understanding the asynchronous nature of callback functions.
        * Familiarity with jQuery deferred methods:** .done(), .fail(), .always().

Topic 2 - WRRC *(Web Request Response Cycle)*
    * How browsers turn a url into a rendered picture
    * The request-response cycle
    * Understanding the parts of a URL/URI.
    * Basic aspects of the request/response cycle.
    * 3 parts of an HTTP request
    * 3 parts of an HTTP response
    * Awareness of DNS
* SANDBOX
    * Preserve selected tab on index
    * Keep form data in new.html, until saved as draft
    * Article data
        * Check cache
        * AJAX from server on miss


## Readings
* JS & jQ, Ch 8: pp.367-408 (Context: 384-387; Essential: 367-383, 388-399; Reference:400-408)
* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (Essential)


## Lab
[Lab 6: AJAX & JSON]()
