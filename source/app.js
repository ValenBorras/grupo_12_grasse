const express = require('express');
const server = express();
const config = require('./modules/server');

server.listen(config.port,config.start());
const {join} = require('path');

//put y delete
const method = require('method-override'); 

//ejs
server.set('views', join(__dirname,'./views'));
server.set('view engine', 'ejs');

//static
const statics = require('./modules/static');
server.use(statics(join(__dirname,"../public")));

//put y delete 
server.use(method('m')) 

//rutas
server.use(require('./routes/index.routes.js')); 
server.use(require('./routes/products.routes.js')); 
server.use(require('./routes/users.routes.js')); 

//req.body
server.use(express.urlencoded({extended:true}))

//404
server.use((req,res,next)=> {
    res.status(404).render("not-found")
})


