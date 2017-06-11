=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- The focus of this day is on solidifying the underlying concepts of the REST architectural style and how to interact with application resources through the use of the HTTP verbs.

- Students will learn to know how to use jQuery AJAX methods to make GET requests to external public APIs. Be sure to discuss common issues, such as CORS related errors, to give students a clear expectation of how to work with external APIs.

- Students will learn how to get an access token and utilize it to retrieve and data on their GitHub accounts via the GitHub API. This data will be displayed in the About section, necessitating an added Handlebars template.

- There's a lot to live-demo today: looking at the Github API and its documentation, accessing various endpoints via AJAX in the console or Postman, getting an access token and using it, checking out the dev tools Network pane, etc. For today they will store the token in a separate JS file that can be .gitignored

- One IMPORTANT thing to keep in mind with the demo portion: it does not take long (just a handful of requests over the course of a few minutes) for the GitHub API to shut down unauthorized requests when students are following along with the demo (since to GitHub it looks like a possible DDOS). This is not a bad thing: when leveraged as part of the class, leads to good discussion on some basic security concepts that will be expanded on the next day of class with deployment.

- This is also a good day to review error codes so that when students get 401s they know what that is as opposed to a 404.

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[Starter code repository for class demo](https://github.com/codefellows/301-12-github-api)

[REST & APIs slides](https://www.icloud.com/keynote/000YgIlw-CJx7sMM56Nf-YNBQ#Code_301_-_Class_12)

---



## **Week 3: The Controller**
# Class 12: RESTful endpoints and External APIs

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. REST
1. API's
1. Lab Prep

### Announcements
* 
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
* Understand the history of HTTP, and the central role that REST plays.
* Use RESTful routes for a web service, to retrieve their own github repos
* Design RESTful endpoints for their own blogging app


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>

## Notes

Topic 1 - REST & APIs

    * Demo - How
        * Head to GitHub and show students how they can request a token to be able to access the API appropriately.
           * Login at GitHub.com
           * In the upper right, click on your face, and head to settings
           * Scroll to the Developer Settings section on the left side.
           * Click on Personal access tokens
           * Now click Generate new token, towards the upper right
           * Confirm login.
           * Enter token description as ‘repos’ or something simple.
           * Check the single ‘repo’ check box for repo scope (this will automatically check the sub boxes).
           * Now scroll to the bottom and select Generate token
           * Save this token! GitHub will only display it to you **one time**
        * Next, show the docs page for the API so that students can see what it offers developers.
        * As code review, walk through setup of a second resource: GitHub repositories.
        * Add a route (at /about)
        * Add a controller (similar to articlesController)
        * Add a model to **requestAll** repo data
           * Use an ajax request in the model
           * Include an authorization header with a personal token
           * Play with the API to see what you can retrieve. try ‘?per_page=100’
           * be sure to .gitignore the personal token file
           * store all repos in repos.all
           * callback to repoView.index
           * make a render method for 1 repo.
           * filter the results before rendering
           * have your index action render all



## Readings
- ["How I Explained REST to My Brother*"](https://gist.github.com/brookr/5977550)
- [https://developer.github.com/guides/getting-started](https://developer.github.com/guides/getting-started/)
- [What is OAuth? (watch videos at the bottom*)](http://searchsoa.techtarget.com/definition/OAuth)


## Lab
[Lab 12: RESTful endpoints and External APIs](https://github.com/cfpdx-301d-spring-2017/12-rest-and-github-api)
