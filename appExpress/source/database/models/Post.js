module.exports = function(sequelize, DataTypes){
    let alias = "Post";
    let cols ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        img:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        intro:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        content:{
            type: DataTypes.STRING(5000),
            allowNull: false,
        }
    };
    let config = {
        timestamps: false,
        tableNames: 'posts'
    };
    const post = sequelize.define(alias, cols, config);

    return post;
}