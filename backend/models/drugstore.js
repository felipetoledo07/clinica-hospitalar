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

    return Drugstore

}