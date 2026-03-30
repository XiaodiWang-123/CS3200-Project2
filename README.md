# CS3200 Project 2

## Design & Implement a Document Database (MongoDB)

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

## MongoDB Data Model

The database uses three main collections:

### 1. Applications (Main Collection)

This is the core collection that embeds most related data:

* Student information (embedded)
* Company information (embedded snapshot)
* Job posting information
* Interview rounds (embedded array)
* Tags (embedded array)
* Contacts (embedded array)
* Offer (optional embedded object)
* Status history (embedded array)

### 2. Students

Stores student master records.

### 3. Companies

Stores company data with embedded:

* Contacts
* Job postings

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
logical_model_mongo.pdf
logical_model_mongo.png
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

## Queries Implemented

### Query 1

Displays application details including student, company, job, and interview rounds.

### Query 2 (Aggregation)

Finds students who have received offers.

### Query 3 (Aggregation)

Counts applications per student and filters students with more than one application.

### Query 4 (Complex Search)

Filters applications using logical operators ($and, $or, $nin).

### Query 5

Counts the number of applications for a specific student.

### Query 6 (Update)

Updates a document by setting the `isArchived` flag.

---

## Screenshots

Execution results for all queries are provided in the `screenshots` folder.

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

- Understanding MongoDB schema design concepts  
- Clarifying query syntax and structure  
- Assisting with debugging errors  

All final design decisions, implementation, and submitted work were completed and fully understood by the author.