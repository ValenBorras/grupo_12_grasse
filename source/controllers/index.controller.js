const controller  = {
    index: (req,res)=> {
        res.render('index')
    },
    testimonios: (req,res)=> {
        res.render("testimonios")
    },
    faqs: (req,res)=> {
        res.render("faqs")
    },
    blog: (req,res) => {
        res.render("blog")
    }
}

module.exports = controller;