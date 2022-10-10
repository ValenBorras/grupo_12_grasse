const PresentationModel = function(sequelize, DataTypes){
    let alias = "presentation";
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
    presentation.hasMany(models.product, {
        as: "products",
        foreignKey: presentation_id
    });
}

return presentation;
}