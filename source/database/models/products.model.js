const productsModel = function(sequelize, DataTypes){
    let alias = "product";
    let cols ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        presentation_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        }, 
        description:{
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        img:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    };
    let config ={
        timestamps: false
    }
}
module.exports = productsModel