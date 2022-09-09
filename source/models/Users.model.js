// TODO Editar la informacion de un usuario

const fs = require('fs');

const User = {
    FileName:'./source/data/users.json',
    
    all: function(){
        return JSON.parse(fs.readFileSync(User.FileName, 'utf-8'));
    },
    generateId: function(){
        let allUsers = User.all();
        let lastUser = allUsers.pop();

        if(lastUser){
            return lastUser.id + 1;
        }

        return 1
    },
    findByPk: function(id){
       let allUsers = User.all();
       let userFound = allUsers.find(e => e.id === id);
       return userFound
    },
    findByEmail: function(email){
        let allUsers = User.all();
        let userFound = allUsers.find(e => e.email === email);
        return userFound
    },
    findByField: function(field, text){
        let allUsers = User.all();
        let userFound = allUsers.find(e => e[field] === text);
        return userFound
    },
    create: function(userData) {
        let allUsers = User.all();
        let newUser = {
            id: User.generateId(),
            name: userData.name,
            surname: userData.surname, 
            email: userData.email,
            password: userData.password, 
            category: userData.category, 
            img: userData.img,
        }
        allUsers.push(newUser);
        fs.writeFileSync(User.FileName, JSON.stringify(allUsers, null, ' '))
        return newUser;
    },
    delete: function(id){
        let allUsers = User.all();
        let finalUsers = allUsers.filter(e => e.id !== id );
        fs.writeFileSync(User.FileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User; 


