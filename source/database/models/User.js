module.exports = function(sequelize, DataTypes){
    let alias = "User";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        img:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config ={
        timestamps: false,
        tableName: 'users'
    }
    const user = sequelize.define(alias, cols, config);

    

    return user;
}
