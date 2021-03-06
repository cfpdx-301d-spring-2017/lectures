## **Week 3: The Controller**
# Class 13: Production & Deployment

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Deploying to Production environment
1. Lab Prep

### Announcements
* GRADES!!!! Goose eggs everywhere. 
    * Play catch up til Monday morning. 
    * No lab or portfolio work during project week.
    * You have until Friday 6/30 to submit late grades!
* **FINAL PROJECT DETAILS**
    * **Your project proposal is due at noon on Monday**
    * **Teams will be given out tomorrow.**
    * Basic needs:
        * Each person must make meaningful contributions in HTML, CSS, and JavaScript.
        * Your web site must have at least 3 interlinked pages and clear navigation.
        * Your web site must have at least 2 pages that accept and process user input.
        * Your web site's state must persist between page reloads.
        * Your web site must be deployed live on the Internet.
        * Your web site must use a third party API.
    * Examples
        * [Garage Fellows](http://garagefellows.herokuapp.com) && [code](https://github.com/christylaguardia/garage-fellows)
        * [Social Parks](http://socialparks.herokuapp.com) && [code](https://github.com/hpats67/socialparks) 
        * [Transplantr](http://transplantr.herokuapp.com) && [code](https://github.com/GloriaAnholt/Transplantr)
    * APIS for inspiration
        * [programmableweb.com directory](https://www.programmableweb.com/category/all/apis)

* Questions?

<hr></hr>

## Learning Objectives
- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Deployed static websites using gh-pages. | Deploy our SPA using Heroku. |
| Only had one environment: development. | Have two environments: development and production. |
| Saved our sensitive githubToken as a JS variable. | Save our githubToken as an environment variable. |

<hr></hr>

## Notes

* Topic 1 - Environments
    * Dev vs Production environment
    * What to do with the GitHub token?
    * How to deploy to Heroku (step by step)
    * Demo - How
        * Deployment-workshop directory
        * Walk through an application deployment
        * [Adding a database](https://devcenter.heroku.com/articles/heroku-postgresql)
            * create a database using the postgresql addon
            * check your configs to see the database url
            * restart your heroku instance
            * ```
                $ heroku addons:create heroku-postgresql:hobby-basic
                $ heroku config
                $ heroku ps:restart
            ```


***Note: There are multiple ways to achieve similar tasks with Heroku. whether through the CLI (Command Line Interface, i.e., your terminal) or through the GUI (Graphic User Interface) provided by your account Dashboard on the Heroku site. We'll look at each, and students should be comfortable with both.***

#### Terminal:
   1. **git clone** https://github.com/heroku/node-js-getting-started.git
   2. **cd node-js-getting-started**
   3. **git remote -v**** ** // origin should point to Heroku's GitHub repo
   4. **heroku create** // will generate a random app name
   5. **heroku create appName** // will generate an app with your name provided, if available.
   6. **git remote -v** // origin remains, but now we see a heroku remote as well!
**heroku apps** // display all user’s apps
**heroku apps:info** // display info on apps
**heroku apps:rename** updated-app-name
**heroku config** // Will list any current config vars
**heroku config:set** CONFIG_VAR=someValue
**heroku config:unset** CONFIG_VAR
**heroku sharing:add brian@codefellows.com **
**heroku open**
**heroku local**
**git status**
**git push heroku master**
**git push heroku branch:master** (if pushing from a branch other than your current one)
**heroku releases**
**heroku releases:info vNumber** // ex: heroku releases:info v2
**heroku rollback**  // rollback one release
**heroku rollback vNumber** // rollback to a specific release
**heroku apps:destroy app-name** // delete a heroku app (repo remains)
        * Development vs Production
        * Deployment steps

#### Heroku Dashboard

- This is where you can manage your deployments and your user account on the Heroku website, and even wire up your deployment to a branch in a GitHub repo to automate deployment updates if you choose. This is a nice way to view information about all of your apps at once and can be a simple tool for management, but keep in mind that the CLI is very useful and versatile. Ideally, students are comfortable using both for a variety of tasks.

- The initial view of the dashboard shows a list of all of your current Heroku apps and some basic information about them. You can click on one to go to a control panel for that app. That control panel has a series of tabs:
    - **Overview**: Basic details and activity logs for the app
    - **Resources**: This is where you can configure add-ons such as extra dynos or configure databases such as Heroku or MongoDB
    - **Deploy**: This tab provides options for deployment tasks, such as via a GitHub branch or other processes.
    - **Metrics**: This is an option available on paid accounts; the tab simply shows a preview of the tools on free accounts.
    - **Activity**: More detailed logging of development and production activity on the app.
    - **Access**: Configure collaborators to share the work on the app.
    - **Settings**: There is a variety of options here: application name, configuration of environment variables, domains/certificates, transfer of ownership, maintenance mode to disable the app temporarily, and an option to delete the app.

## Readings

- [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)


## Lab
[Lab 13: Production & Deployment](https://github.com/cfpdx-301d-spring-2017/13-production-deployment)
