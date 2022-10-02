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
    tableNames: 'references'
};
const referencia = sequelize.define(alias, cols, config);

return referencia;
}