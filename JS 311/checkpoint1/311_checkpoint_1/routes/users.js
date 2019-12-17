const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/', usersController.list)

router.get('/:id', usersController.show)

router.post('/', usersController.create)

router.put('/:id', usersController.update)

router.delete('/:id', usersController.deleteUser)

module.exports = router