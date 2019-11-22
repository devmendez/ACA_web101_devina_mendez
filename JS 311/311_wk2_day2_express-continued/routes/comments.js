const express = require('express');
const router = express.Router();

const commentsControllers = require('../controllers/comments');


router.get('/comments', commentsControllers.list);

router.get('/comments/:id', commentsControllers.show);

router.post('/comments', commentsControllers.create);


module.exports = router;