const brandModel = function(sequelize, DataTypes){
    let alias = "brand";
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
    tableNames: 'brands'
};
const brand = sequelize.define(alias, cols, config);

brand.associate = function(models){
    brand.hasMany(models.reference, {
        as: "referencies",
        foreignKey: "brand_id"
    })
}

return brand;
}