const express = require('express')
const bodyParser = require("body-parser");
const router = require('./routes/users');


const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use('/users', router)

app.get('/', (req, res) => {
  res.send('default route')
})

app.listen(port, () => {
  console.log('app is listening on:', port)
});