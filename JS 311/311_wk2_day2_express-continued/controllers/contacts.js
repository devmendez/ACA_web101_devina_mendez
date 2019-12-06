const contacts = require('../data/contacts');

let contactCounter = contacts.length;
console.log(contactCounter);

const list = (req, res) => {
    res.json(contacts);
}

const show = (req, res) => {
    const id = req.params.id;

    const contactsMatch = contacts.find(contact => contact._id === Number(id));

    res.json(contactsMatch);
}

const create = (req, res) => {
    let newContact = {
    _id: contactCounter +1,    
    body: req.body.body,
    postId: 1
    };
   
    contacts.push(newContact);
}


module.exports = {
    list, 
    show, 
    create
}