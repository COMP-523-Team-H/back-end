const express = require("express");
const Routes = express.Router();
const app = express();
const PORT = process.env.PORT || 8080;

Routes.post('/', (req, res)=>{
    //put request into database
})

Routes.get('/', (req, res)=>{
    //return the webpage
})

Routes.get('/:id', (req, res)=>{
    //return the list of id from database
})

app.use('/', Routes);

app.listen(PORT, ()=>console.log("app running on port " + PORT));




