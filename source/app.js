const express = require('express');
const server = express();
const config = require('./modules/server');
server.listen(config.port,config.start());

const {join} = require('path');
const statics = require('./modules/static');
server.use(statics(join(__dirname,"../public")));

const productsRoutes = require('./routes/products.routes'); 
server.use(productsRoutes); 


server.get('/', (req,res)=> {
    res.sendFile(join(__dirname,'./views/index.html'))
});

server.get('/detalle', (req,res)=> {
    res.sendFile(join(__dirname,'./views/detail.html'))
});

server.get('/login', (req,res)=> {
    res.sendFile(join(__dirname,'./views/login.html'))
});

server.get('/register', (req,res)=> {
    res.sendFile(join(__dirname,'./views/register.html'))
});

server.get('/carrito', (req,res)=> {
    res.sendFile(join(__dirname,'./views/cart.html'))
});


