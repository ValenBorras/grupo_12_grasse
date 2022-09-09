// si no tengo a nadie en session voy a redirigir a login

function authMiddleware (req,res,next) {
    if (!req.session.userLogged) {
        return res.redirect("/Ingreso")
    }
    next();
}

module.exports =authMiddleware;