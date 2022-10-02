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
const presentacion = sequelize.define(alias, cols, config);

return presentacion;
}