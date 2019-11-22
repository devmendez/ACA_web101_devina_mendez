## Setup

Initialize and run the app: `npm install && npm start`.

## Overview

You should see some Jest tests. There are three suites of tests, one for each module (`dates`, `numbers`, `strings`). Each test suite contains three individual tests. The goal of this excercise is to make all of the tests pass. You can examine this repo in the following ways:

* Look in `test/index.test.js`

  * The `describe` blocks represent each of the modules

  * The `test` functions describe the tests in question.. including a description of what the function should be doing

* Look at the the `dates`, `numbers` and `strings` folders

  * These are your module folders. Each function in the module should correspond with one test function in `test/index.test.js`

  * Write your code below the comment in each function

The modules will be broken down below:


## Numbers

* Complete the following functions in `numbers/index.js`:

* isEven
  * Return a boolean that represents whether a given number is even
  * Hint: Modulus

* Sum
  * Return a value that represents the sum of an array of numbers
  * Hint: Reduce

* ComboSum
  * Determine if any combination of numbers in an array equals a given sum. Return a boolean
  * Hint: Loop in loop OR indexOf for diff

## Strings

* Complete the following functions in `strings/index.js`:

* Split
  * Split a string on a given delimiter and return the resulting array
  * Hint: split

* Pairs
  * Break a string into pairs of two characters each. Return the array of pairs
  * Hint: For loop, increment by 2

* Reverse
  * Reverse the characters in a given string
  * Hint: split, reverse, join

## Dates

* Complete the following functions in `dates/index.js`:
* Make sure to import `moment` at the top of the file
* Refer to the moment.js docs: https://momentjs.com/docs/

* Today
  * Return the name of current day. Ex. Monday, Tuesday, etc.
  * Hint: moment().format(?)

* Calendar
  * Return the current date in the format: May 29, 2019
  * Hint: moment().format(?)

* CurrentTime
  * Return the current time in the format: 03:21:51 PM
  * Hint: moment().format(?)


## Final thoughts 

You're app should have all of it's tests passing. Take a moment to reflect on your Node/NPM capabilities and begin pre-work for next class
