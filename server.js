const express = require("express");
const cors = require('cors');

const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'dev';

const Router = require('./Router');


const mongoHost = process.env["MONGODB_URL"] || "127.0.0.1";
console.log(mongoHost);
const mongoPort = "27017";
const mongoDatabase = "sampledb";

const mongoUser = process.env["MONGODB_USER"];
const mongoPassword = process.env["MONGODB_PASSWORD"];

var mongoURL = 'mongodb://';
if (mongoHost !== "127.0.0.1") {
    mongoURL += mongoUser + ':' + mongoPassword + '@';
}
mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

console.log(mongoURL);
console.log(mongoUser);
console.log(mongoPassword);
mongoose.connect(mongoURL);

const connection = mongoose.connection;


connection.once('open', ()=>{
    console.log("mongoDB database connection established successfully");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/', Router);

if(env == 'production'){
    console.log(env);
    app.use(express.static(path.join(__dirname, 'views/build')));
}

// app.use(express.static(path.join(__dirname, 'views/build')));


app.listen(PORT, ()=>console.log("app running on port " + PORT));




