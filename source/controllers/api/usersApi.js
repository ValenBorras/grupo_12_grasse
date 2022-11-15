const db = require("../../database/models")

module.exports = {
    all: (req,res) => {
        db.User.findAll()
        .then(users => {
            return res.json({
                meta:{
                    status:200,
                    count: users.length,
                    url:req.url
                },
                data: users
            })
        })
    },
    detail: (req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            res.json({
                meta:{
                    status:200,
                    url:req.url
                },
                data: user

            })
        })
    },
    
}
