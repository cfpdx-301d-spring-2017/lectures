=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

- The purpose of this class is to introduce the concepts of database normalization through the use of SQL joins.

- The aim is to expose students to the process of creating relation based tables, understanding proper database design, and updating or fixing duplicate and error prone data through the use of SQL based joins.

- For Lab 8, we only had one table, *articles*, in the DB. For today's lab, there that table has been decomposed into two tables, *articles* and *authors*.

- ***Key operational detail:*** Remember to DROP TABLE the existing articles table for Lab 8 because it is structured differently than the one we are using today, and the database loader will not load the new articles table if the previous one is already there.

- This is typically a BIG code review day to make sure everyone has a good handle on what all was added to the Lab 8 code.

- The core task of the lab today is to rewrite the SQL queries that are in in server.js to account for the database setup with two tables rather than one.

- This is also a good day to encourage students to test the app in the browser console, and there is a doc called crud-testing.md that gives instructions on how to do that. The students are probably still needing to fill a lot of mental gaps on how this all fits together, and getting their fingers dirty in the console helps a lot.



## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->

[SQL Joins slides](https://www.icloud.com/keynote/000y-6yfdhnh_k-Cy1nd8cuEA#Code_301_-_Class_9)


---

## **Week 2: The Model**
# Class 9: SQL Joins & Relations

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
- Understand how objects in a database can be interrelated with foreign keys
- Have familiarity with queries using SQL that select data from across multiple tables
- Have familiarity with different relationships in database tables


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Created static webpages from scratch using HTML, JS, and CSS. | Jump into an existing code base of a static website blog. |

<hr></hr>

## Notes

    * Database Relationships
        * 1:1 Rel
        * 1:Many / Many:1 Rel
        * Many:Many Rel
            91. Include Junction Tables

        * Self-referencing Rel
    * Database Normalization
        * Remove duplicate data.
        * Minimize database redesign.
        * Minimize modification anomalies.
    * Joins
        * Understanding Primary and Foreign Keys
            92. Discuss how these keys are related and can be used for database normalization

        * Inner Join
            93. Discuss syntax

            94. Discuss concepts

        * High Level Overview of Other Join types*
    * Demo - How
        * How to normalize a database.
        * How to use foreign keys.
        * How to use subqueries.
        * How to perform an inner join.


## Readings
* [SQLBolt (Lessons 6-7) (Essential)](http://sqlbolt.com/lesson/select_queries_with_joins)
* [A Primer on SQL (Chapter 11) (Reference)](https://leanpub.com/aprimeronsql/read#leanpub-auto-understanding-joins)
* [Visual Guide to SQL Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab 9: SQL Joins & Relations](../../labs/09-SQL-joins/README.md)
