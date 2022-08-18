// TODO Editar la informacion de un usuario

const fs = require('fs');

const User = {
    FileName:'./source/data/users.json',
    
// Buscar a todos los usuarios 
    getData: function(){
        return JSON.parse(fs.readFileSync(User.FileName, 'utf-8'));
    },

    findAll: function(){
        return User.getData();
    }, 

// Generar un id 
    generateId: function(){
        let allUsers = User.findAll();
        let lastUser = allUsers.pop();

        if(lastUser){
            return lastUser.id + 1;
        }

        return 1
    },

    // Buscar al usuario por su id
    findByPk: function(id){
       let allUsers = User.findAll();
       let userFound = allUsers.find(e => e.id === id);
       return userFound
    },

// Buscar al usuario por su email
    findByEmail: function(email){
        let allUsers = User.findAll();
        let userFound = allUsers.find(e => e.email === email);
        return userFound
    },

// Buscar al usuario por cualquier campo 
    findByField: function(field, text){
        let allUsers = User.findAll();
        let userFound = allUsers.find(e => e[field] === text);
        return userFound
    },
 
// Guardar al usuario en la DB 
    create: function(userData) {
        let allUsers = User.findAll();
        let newUser = {
            id: User.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(User.FileName, JSON.stringify(allUsers, null, ' '))
        return newUser;
    },

// Eliminar a un usuario de la DB 
    delete: function(id){
        let allUsers = User.findAll();
        let finalUsers = allUsers.filter(e => e.id !== id );
        fs.writeFileSync(User.FileName, JSON.stringify(finalUsers, null, ' '))
    }
}

module.exports = User; 