const express = require('express');
const router = express.Router();

const contactsControllers = require('../controllers/contacts');


router.get('/contacts', contactsControllers.list);

router.get('/contacts/:id', contactsControllers.show);

router.post('/contacts', contactsControllers.create);


module.exports = router;