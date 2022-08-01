const express = require('express');
const app = express();

const path= require('path');
const port= process.env.port || 3030; 

app.use(express.static(path.resolve(__dirname,'../public')));

app.listen(port, () => console.log('Servidor corriendo...'));

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/index.html'))
});

app.get('/detalle', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/detail.html'))
});

app.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/login.html'))
});

app.get('/register', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/register.html'))
});

app.get('/carrito', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/cart.html'))
});


