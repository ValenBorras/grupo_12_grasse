// si no tengo a nadie en session voy a redirigir a login

function authMiddleware (req,res,next) {
    if (!req.session.userLogged) {
        return res.redirect("/ingreso")
    }
    next();
}

module.exports =authMiddleware;