const referenceModel = function(sequelize, DataTypes){
    let alias = "reference";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name:{
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        brand_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    };
let config = {
    timestamps: false,
    tableNames: 'referencies'
};
const reference = sequelize.define(alias, cols, config);

reference.associate = function(models){
    reference.belongsTo(models.brand, {
        as: "brand",
        foreignKey: "brand_id"
    })
}

return reference;
}