const products = require('../data/products');

let productCounter = products.length;
console.log(productCounter);

const list = (req, res) => {
    res.json(products);
}

const show = (req, res) => {
    const id = req.params.id;

    const productMatch = products.find(product => product._id === Number(id));

    res.json(productMatch);
}

const create = (req, res) => {
    let newProduct = {
    _id: productCounter +1,    
    body: req.body.body,
    postId: 1
    };
   
    products.push(newProduct);
}


module.exports = {
    list, 
    show, 
    create
}