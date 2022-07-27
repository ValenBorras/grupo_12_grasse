const express = require('express');
const app = express();

const path= require('path');
const port= process.env.port || 3030; 

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(port, () => console.log('Servidor corriendo...'));

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/index.html'))
});

app.get('/Detalle', (req,res)=> {
    res.sendFile(path.join(__dirname,'./views/detail.html'))
});