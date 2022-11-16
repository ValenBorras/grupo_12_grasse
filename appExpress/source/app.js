const express = require('express');
const session = require("express-session");
const server = express();
const cookies = require("cookie-parser");
const config = require('./modules/server');
const userLoggedMiddleware = require("./middlewares/user.logged.middleware");

server.listen(config.port,config.start());
const {join} = require('path');

const cors = require('cors')

server.use(cors())

//put y delete
const method = require('method-override'); 

//cookies
server.use(cookies());

//ejs
server.set('views', join(__dirname,'./views'));
server.set('view engine', 'ejs');

//Session
server.use(session({
    secret:"Shh, it's a secret",
    resave:false,
    saveUninitialized:false
}));

server.use(userLoggedMiddleware);

//static
const statics = require('./modules/static');
server.use(statics(join(__dirname,"../public")));

//put y delete 
server.use(method('m')) 


//req.body
server.use(express.urlencoded({extended:true}))
server.use(express.json())

//rutas
server.use(require('./routes/index.routes.js')); 
server.use(require('./routes/products.routes.js')); 
server.use(require('./routes/users.routes.js')); 

//rutas api
server.use(require('./routes/Api/usersApi.routes'));
server.use(require('./routes/Api/productsApi.routes'));

//404
server.use((req,res,next)=> {
    res.status(404).render("not-found")
})

