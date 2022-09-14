// si tengo a alguien en session voy a redirigir a perfil

function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {
        return res.redirect("/perfil")
    }
    next();
}

module.exports =guestMiddleware;