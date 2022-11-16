const db = require("../database/models")

function userLoggedMiddleware (req,res,next) {
    
    res.locals.isLogged = false;
 
    if(req.cookies.email){
        db.User.findAll({
            where:{
                email: req.cookies.userEmail
            }
        }).then((result) => {
            if(result) {
                return req.session.userLogged = result;
            }
            
                    
        }).catch((err) => {
            console.log(err)
        });
    }
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    return next()
}

module.exports = userLoggedMiddleware;