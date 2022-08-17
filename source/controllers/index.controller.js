const controller  = {
    index: (req,res)=> {
        res.render('index')
    },
    testimonios: (req,res)=> {
        res.render("testimonios")
    }
}

module.exports = controller;