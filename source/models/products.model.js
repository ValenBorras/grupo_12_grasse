const {resolve} = require("path")
const fs = require("fs")

let model = {

    all : function() {
        let file =resolve(__dirname,"../data","products.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },

    one: function (id) {
        let all = model.all();
        return all.find(e => e.id == id)
    },

    generate: function() {
        let all = model.all();
        let last = all.pop()
        let product = {}
        product.name = data.name
        product.price = parseInt(data.price)
        product.category = data.category
        product.id = last.id + 1
        return product;
    },

    write: function(data) {
        let file =resolve(__dirname,"../data","products.json")
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}