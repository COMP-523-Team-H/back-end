const express = require("express");

const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const Router = require('./Router');




mongoose.connect('mongodb://127.0.0.1:27017/article-analyzer', {useNewUrlParser: true});

const connection = mongoose.connection;


connection.once('open', ()=>{
    console.log("mongoDB database connection established successfully");
});



app.use(bodyParser.json());
app.use('/', Router);

app.use(express.static(path.join(__dirname, 'views/build')));

app.listen(PORT, ()=>console.log("app running on port " + PORT));




