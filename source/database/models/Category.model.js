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
const category = sequelize.define(alias, cols, config);

category.associate = function(models){
    category.hasMany(models.product, {
        as: "products",
        foreignKey: category_id
    });
}

return category;
}