const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

//request parameter
app.get('/', (req,res) =>{
const id = req.query.id;
const usename = req.query.username;

res.send(`user id: ${id}. username: ${username}`)
});



//request query
app.get('/users/:id', (req,res) =>{
    const product_id = req.params.id;

    //product array-like object
    const products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
        {"id": 3, "name": "Product C"},
    ];

// define a finder.mapping function to grab the product by id 
const product = products.find(products => products.id == parseInt(product_id));

// accessing the product object variables through dot notation
res.send(`Product id: ${product.id}, Name: ${product.name}`);

});


app.listen(PORT, ()=>{
console.log(`Connected on port ${PORT}`);
});
