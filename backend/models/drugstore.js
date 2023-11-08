module.exports = (sequelize, DataTypes) => {

    const Drugstore = sequelize.define("Drugstore", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Drugstore.associate = (models) => {
        Drugstore.hasMany(models.Recipe);
    }

    return Drugstore

}