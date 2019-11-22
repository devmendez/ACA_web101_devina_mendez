const vehicles = require('../data/vehicles');

let vehicleCounter = vehicles.length;
console.log(vehicleCounter);

const list = (req, res) => {
    res.json(vehicles);
}

const show = (req, res) => {
    const id = req.params.id;

    const vehiclesMatch = vehicles.find(vehicles => vehicles._id === Number(id));

    res.json(vehiclesMatch);
}

const create = (req, res) => {
    let newVehicle = {
    _id: vehicleCounter +1,    
   // ...req.body,
   year: req.body.year,
   make: req.body.make, 
   model: req.body.model,
    postId: 1
    };
   console.log(req.body);
    vehicles.push(newVehicle);
}

module.exports = {
    list, 
    show, 
    create
}