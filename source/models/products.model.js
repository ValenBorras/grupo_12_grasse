const {resolve} = require("path")
const fs = require("fs")

let Products = {

    all : function() {
        let file =resolve(__dirname,"../data","products.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },

    one: function (id) {
        let all = Products.all();
        return all.find(e => e.id == id)
    },

    generate: function(data) {
        let all = Products.all();
        let last = all.pop()
        let product = {}
        product.name = data.name
        product.description = data.description
        product.img = data.img
        product.price = parseInt(data.price)
        product.category = data.category
        product.presentation = data.presentation
        product.id = last.id + 1
        return product;        
    },

    write: function(data) {
        let file =resolve(__dirname,"../data","products.json")
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}

module.exports = Products; 