module.exports = (sequelize, DataTypes) => {

    const Patient = sequelize.define("Patient", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    })

    return Patient

}