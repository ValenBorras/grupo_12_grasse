const {resolve}= require('path');
const fs= require('fs');

const model = {
    all: () =>{
        let file = resolve(__dirname,'../data','products.json');
        let data = fs.readFileSync(file);
        return JSON.parse(data);
    },
    one: (id) =>{
        let all = model.all();
        return all.find(e => e.id == id);
    },
    generate: (data)=> {
        let all = model.all();
        let last = all.pop();
        let product ={}
        product.name = data.name;
        product.category = data.category;
        product.presentation = data.presentation;
        product.price = parseInt(data.price);

        product.id = last.id + 1; 
        product.image = data.image;
        return product;
    }
}