# Microblog

## Description

Microblog is a full stack app where users can create/edit/delete posts, create/delete comments on those posts, and upvote or downvote the posts as well. It uses React, Redux, and Redux-Thunk on the frontend, and Node/Express and PostgreSQL on the backend.

## To run this repo locally:

### Prerequisites:
1. Install Node.js and npm
2. Install PostgreSQL

### Setup
1. Git clone this repo and `cd` into it

#### Backend
1. `cd backend`
2. `psql < data.sql` (creates microblog db and seeds initial data)
3. `npm install`
4. `npm start` or `nodemon`

#### Frontend
1. `cd frontend` from base directory
2. `npm install`
3. `npm start`

## Tech Stack
### Backend
1. Node - Server Runtime Environment
2. Express - Node Web App Framework
3. PostgreSQL - Relational Database

### Frontend

1. React - Frontend JS Framework
2. React-Router - Library to create single page app
3. React-Redux - State management library
4. Redux-Thunk - Redux middleware to allow async action creators
5. React-Bootstrap - Bootstrap components as React components
6. React-Flip-Toolkit - Animation library for reordering list components
7. axios - http client

Note: This was a pair project at Rithm. The backend and frontend were separate projects. The frontend was entirely built by my programming partner and I. The backend consists of optimized code that was graciously provided by Rithm staff.

