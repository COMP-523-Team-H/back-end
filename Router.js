const Router = require('express').Router();
let URL = require('./models/URL');

Router.post('/', (req, res)=>{
    console.log(req.body);
    const url = new URL(req.body);
    url.save()
        .then(()=>{
            res.status(200).json({'url':'url added'});
        })
        .catch(()=>{
            res.status(400).send('url already exists');
        });
});

Router.get('/:id', (req, res)=>{
    console.log('get called');
    URL.find((err, urls)=>{
        res.json(urls);
    });
});

module.exports = Router;