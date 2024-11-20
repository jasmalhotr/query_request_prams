const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

//request parameter
app.get('/', (req,res) =>{
const id = req.params.id;
const usename = req.query.username;

res.send(`user id: ${id}. username: ${username}`)
});



app.listen(PORT, ()=>{
console.log(`Connected on port ${PORT}`);
});
