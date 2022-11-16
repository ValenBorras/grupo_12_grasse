module.exports = function(sequelize, DataTypes){
    let alias = "Presentation";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        size:{
            type: DataTypes.STRING(5000),
            allowNull: false,
        }
    };
let config = {
    timestamps: false,
    tableNames: 'presentations'
};
const presentation = sequelize.define(alias, cols, config);

presentation.associate = function(models){
    presentation.hasMany(models.Product, {
        as: "products",
        foreignKey: 'presentation_id'
    });
}

return presentation;
}