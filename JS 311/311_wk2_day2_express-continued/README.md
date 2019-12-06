# Express Practice

## Setup

Initialize and run the app: `npm install` && `npm start`.

## Overview

A web page has been created for us. Our job is to build the server.


## Part 1 - Index.js

* This is the starting point of the server, put all code here

### Express.static

* After "app" is defined, add the `express.static` middleware to express referencing the "public" folder
* Navigate to http://localhost:4000 to see the web page

### Body-parser

* After "express.static", add body parser middleware to express
  * Remember: `bodyParser.json()`

### Create express routes to get all things

* Between lines 2 and 3, require the data for from the following .js files:
  * /data/contacts
  * /data/vehicles
  * /data/comments
  * /data/products
* Add `app.get()` routes for the following:
  * "/contacts"
  * "/vehicles"
  * "/comments"
  * "/products"
* `res.json()` the appropriate array from the "require" statements above

### Create express routes to get one thing

* Add `app.get()` routes for the following:
  * "/contacts/:id"
  * "/vehicles/:id"
  * "/comments/:id"
  * "/products/:id"
* Make sure to include the path variable for id (above)
* Use `req.params.id` to .find() the item from the appropriate array (by its _id)
  * Example: `i._id == req.params.id`
* `res.json()` the item found

### Create express routes to create one thing

* Add `app.post()` routes for the following:
  * "/contacts"
  * "/vehicles"
  * "/comments"
  * "/products"
* Add the information from the body to the appropriate array
  * Figure out how to increment each `_id` by one and add this _id to "req.body"
  * Add `postId: 1` to "req.body"
  * Finally.. `<ARRAY>.push(req.body)`

### Summary

Once completed, the web page should be able to list out the information, create new information and view one item of the information. We don't need to worry about update or delete.


# Part 2 - Routes

* Create a folder called "routes" on the top level (next to data)
* Create the following route files under this folder:
  * contacts.js
  * vehicles.js
  * comments.js
  * products.js
* The first two lines of each file should consist of:
  * `const express = require('express')`
  * `const router = express.Router()`
* Use the router to move the appropriate routes into the appropriate files
  * Ex. `app.get('/contacts')` in "index.js" becomes `router.get('/contacts')` in "routes/contacts.js"
  * Make sure you move the appropriate "data" from the index.js file into the new file
  * Make sure you export the router from each file
* Import/require and use the routers in index.js
  * Ex. for each.. `app.use(<IMPORTED_ROUTER>)`


# Part 3 - Controllers

* Create a folder called "controllers" on the top level (next to data, routes)
* Create the following controller files under this folder:
  * contacts.js
  * vehicles.js
  * comments.js
  * products.js
* Move the appropriate "data" from the router files to the controller files
  * Ex. move `const comments = require("../data/comments")` into the controller file so it has access to the array
* Take the code from each router file and move it into the corresponding controller file
  * Make variables (`const <something>`) for each function
  * We will make three functions in each file: "list", "show" and "create"
    * You should be able to determine which is which, for example the GET routes will be "list" and "show"
  * Export the functions at the end like:
    *  `module.exports = { list, show, create }`
* Import and use the controller functions in the appropriate router
  * Ex. `app.get('/comments', commentController.list)`
* When complete your routes files should look like this:

```
const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

router.get('/vehicles', vehiclesController.list)

router.get('/vehicles/:id', vehiclesController.show)

router.post('/vehicles', vehiclesController.create)

module.exports = router
```


