module.exports = (sequelize, DataTypes) => {

    const Doctor = sequelize.define("Doctor", {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medical_license: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        openning_hours: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Doctor

}