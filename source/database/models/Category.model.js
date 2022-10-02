const usersModel = function(sequelize, DataTypes){
    let alias = "category";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name:{
            type: DataTypes.STRING(5000),
            allowNull: false,
        }
    };
let config = {
    timestamps: false,
    tableNames: 'categories'
};
const categoria = sequelize.define(alias, cols, config);

return categoria;
}