const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

//ROUTES
app.get('/',(req,res) => {
    res.send('Hollo world')
});

app.get('/posts',(req,res) => {
    res.send('Hollo posts')
})
//Lisitening to the server
app.listen(3000);