const express = require('express');
const router = express.Router();

const vehiclesControllers = require('../controllers/vehicles');


router.get('/vehicles', vehiclesControllers.list)

router.get('/vehicles/:id', vehiclesControllers.show)

router.post('/vehicles', vehiclesControllers.create)


module.exports = router;