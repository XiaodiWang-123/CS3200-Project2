# Internship Application Tracker – MongoDB Document Database Design

CS3200 Practicum – Document Database Design using MongoDB

---

## Overview

This project extends Project 1 by transforming a relational database for internship application tracking into a document-based database using MongoDB.

The system manages:

* Students
* Companies
* Job Postings
* Applications
* Interview Rounds
* Offers
* Tags
* Contacts
* Status History

The main goal is to redesign the relational schema into a hierarchical document model and implement queries using MongoDB.

---

## Problem Requirements

The system is designed to support students in managing their internship application process. It must:

* Track applications submitted by students
* Store company and job posting information
* Record interview rounds and outcomes
* Maintain application status history
* Store offers and decisions
* Support tagging and categorization of applications
* Allow efficient querying of application data

The system prioritizes fast read operations and flexibility, making it suitable for a document-based database design.

---

## MongoDB Data Model

The database uses three main collections:

### 1. Applications (Main Collection)

This is the core collection and serves as the primary entry point for most queries. It embeds related data to optimize read performance.

Includes:

* Embedded student snapshot
* Embedded company snapshot
* Job posting information
* Interview rounds (embedded array)
* Tags (embedded array)
* Contacts (embedded array)
* Offer (optional embedded object)
* Status history (embedded array)

---

### 2. Students

Stores student master records independently to support:

* Direct student queries
* Updates without affecting historical application data

---

### 3. Companies

Stores company data with embedded:

* Contacts
* Job postings

---

## Design Justification

The database design follows MongoDB best practices by using embedded documents for relationships that are frequently accessed together.

* **Applications as root collection**: minimizes joins and supports common queries
* **Embedded documents** (interviews, tags, contacts): improve read performance
* **Data duplication** (student and company snapshots): preserves historical accuracy
* **Separate collections** (Students, Companies): support independent queries and updates

This hybrid approach balances performance, scalability, and data consistency.

---

## Project Structure

```
mongo/
  applications.json
  students.json
  companies.json
  query1.js
  query2.js
  query3.js
  query4.js
  query5.js
  query6.js
  init_instructions.txt

screenshots/
  query1.png
  query2.png
  query3.png
  query4.png
  query5.png
  query6.png

Requirement.pdf
CS3200 Project 2 Mongo Logical Model.png
ERD.png
lucidchart_link.txt
README.md
```

---

## Database Initialization

To load the database:

```bash
mongoimport --db internship_tracker_mongo --collection students --file mongo/students.json --jsonArray
mongoimport --db internship_tracker_mongo --collection companies --file mongo/companies.json --jsonArray
mongoimport --db internship_tracker_mongo --collection applications --file mongo/applications.json --jsonArray
```

---

## Running Queries

You can execute the queries using MongoDB shell:

```bash
use internship_tracker_mongo
load("mongo/query1.js")
```

Repeat for other query files as needed.

---

## Queries Implemented

### Query 1

Retrieve application documents including embedded student, company, and interview data.

### Query 2 (Aggregation)

Use an aggregation pipeline to identify students who have received offers.

### Query 3 (Aggregation)

Group applications by student and count total applications per student, filtering those with more than one application.

### Query 4 (Complex Search)

Filter applications using compound conditions with `$and`, `$or`, and `$nin`.

### Query 5

Count total number of applications for a specific student using `countDocuments`.

### Query 6 (Update)

Update application documents by setting the `isArchived` field based on a query condition.

---

## Screenshots

Execution results for all queries are provided in the `screenshots/` folder.

---

## ERD

The ERD diagram is provided as `ERD.png`, along with the Lucidchart link in `lucidchart_link.txt`.

---

## Notes

* The design uses embedded documents to reduce joins and improve read performance.
* Data duplication is intentionally used to optimize query efficiency in MongoDB.
* The applications collection serves as the primary entry point for most queries.

---

## Author

Xiaodi Wang

---

## AI Disclosure

AI tools (ChatGPT) were used in this project for guidance and learning purposes, including:

* Understanding MongoDB schema design concepts
* Clarifying query syntax and structure
* Assisting with debugging errors

All final design decisions, implementation, and submitted work were completed and fully understood by the author.

---

## Video Demo

https://youtu.be/bljDv2nWaeM
