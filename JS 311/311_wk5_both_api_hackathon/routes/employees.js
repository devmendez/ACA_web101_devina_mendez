const express = require('express');
const router = express.Router();

router.get('/employees', (req, res) => {
    res.send("Getting employees")
})

router.get('/employees/:id', (req, res) => {
    res.send("Getting employees")
})

router.get('/firstname/:first_name', (req, res) => {
    res.send("Getting employees")
})

module.exports = router;