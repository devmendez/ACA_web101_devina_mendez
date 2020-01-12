'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.status(200).send("Hello from my first app!");
});

var server = app.listen(process.env.PORT || '8080', function(){
    console.log('App listening on port %s', server.address().port);
});