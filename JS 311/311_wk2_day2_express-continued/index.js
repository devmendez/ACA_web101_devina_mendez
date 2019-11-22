const express = require("express");
const bodyParser = require("body-parser");

const commentsRouter = require('./routes/comments');
const contactsRouter = require('./routes/contacts');
const productsRouter = require('./routes/products');
const vehiclesRouter = require('./routes/vehicles');


const app = express();

const port = process.env.PORT || 4001;


app.use(express.static('public'));
app.use(bodyParser.json());

app.use(commentsRouter);
app.use(contactsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
