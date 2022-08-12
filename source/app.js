const express = require('express');
const server = express();
const config = require('./modules/server');

server.listen(config.port,config.start());
const {join} = require('path');

server.set('views', join(__dirname,'./views'));
server.set('view engine', 'ejs');

const statics = require('./modules/static');
server.use(statics(join(__dirname,"../public")));


server.use(require('./routes/index.routes.js')); 
server.use(require('./routes/products.routes.js')); 
server.use(require('./routes/users.routes.js')); 


server.use((req,res,next)=> {
    res.status(404).render("not-found")
})


