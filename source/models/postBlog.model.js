const {resolve} = require("path")
const fs = require("fs")

let postBlog = {

    all : function() {
        let file =resolve(__dirname,"../data","postBlog.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },

    one: function (id) {
        let all = postBlog.all();
        return all.find(e => e.id == id)
    },

    generate: function(data) {
        let all = postBlog.all();
        let last = all.pop()
        let post = {}
        post.title = data.title
        post.intro = data.intro
        post.content = data.content
        post.id = last.id + 1
        return product;        
    },

    write: function(data) {
        let file =resolve(__dirname,"../data","postBlog.json")
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}

module.exports = postBlog; 