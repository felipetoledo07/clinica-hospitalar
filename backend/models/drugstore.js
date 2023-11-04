module.exports = (sequelize, DataTypes) => {

    const Drugstore = sequelize.define("Drugstore", {
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