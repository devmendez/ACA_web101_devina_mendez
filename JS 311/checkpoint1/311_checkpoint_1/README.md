# Checkpoint 1

## Setup

Initialize and run the app: `npm install` && `npm start`.

## Overview

We are going to create a CRUD app using our knowledge of _routes_ and _controllers_. We will not be incorporating static files in this assignment. The basic Express functionality has been written for us but we will need to create any additional files/folders. Follow the instructions below to begin.

## Instructions

#### 1. Index

* In the `index.js` file, import and use the `bodyParser` in order to ensure that the body from our POST requests is appropriately cast to JSON.

#### 2. Routes

We will create five routes. The data for these routes is provided in the `data` folder. It is up to you to make use of this data correctly. For the POST route you may import and use the `sampleUser` file instead of creating a user manually.

* Create a `routes` folder to hold our routes. Underneath make a file called `users.js` to represent the users router

* Create the following routes inside `users.js`

* GET /users
  * Return all users

* GET /users/:id
  * Return just the user that matches the path param (id)

* POST /users
  * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

* PUT /users/:id
  * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

* DELETE /users/:id
  * Delete one user by it's id

_You may chose to alter these routes so they appear as ('/', '/:id') in your users file and then prefix them all with '/users' when we import them into index.. but you are not required to do so_

#### 3. Controllers

* Create a `controllers` folder to hold our routes. Underneath make a file called `users.js` to represent the users controller

We will create five controller functions. These will correspond to the routes above. ALL LOGIC for retrieving or updating the "data" should be done here. After that is complete we will import these controller functions into the routes. The end result of your routes should look like this: `router.get('/users', usersController.listUsers)`. Create the following controller functions:

* listUsers
  * Should retrieve the entire array from _data/index_

* showUser
  * Should retrieve just the user that matches the passed-in id

* createUser
  * Should add a user to the array

* updateUser
  * Should update one user in the array based on its id

* deleteUser
  * Should delete one user from the array based on its id


#### 4. Error handling

Make sure that you are handling common use cases. For example, if we try to find a user by its _id_ and no id exists, we should return a 404 status code and no data. Likewise for the PUT and DELETEs, if a user doesn't exist return a 400 (bad request) status code.


## POINTS

* App starts (done for you)                           - 10 pts
* Routes/Controllers structured appropriately         - 20 pts
* Routes/Controllers correctly imported in index.js   - 10 pts
* Can GET users all at once or by id                  - 10 pts
* Can POST to create a new user                       - 10 pts
* Can PUT to update a user                            - 10 pts
* Can DELETE a user by its id                         - 10 pts
* Error handling                                      - 20 pts
