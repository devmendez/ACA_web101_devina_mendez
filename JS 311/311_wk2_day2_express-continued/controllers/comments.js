const comments = require('../data/comments');

let commentCounter = comments.length;
console.log(commentCounter);

const list = (req, res) => {
    res.json(comments);
}

const show = (req, res) => {
    const id = req.params.id;

    const match = comments.find(comment => comment._id === Number(id));

    res.json(match);
}

const create = (req, res) => {
    let newComment = {
    _id: commentCounter +1,    
    body: req.body.body,
    postId: 1
    };
   
    comments.push(newComment);
}


module.exports = {
    list, 
    show, 
    create
}