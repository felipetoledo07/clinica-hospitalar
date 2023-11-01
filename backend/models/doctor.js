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
        specialization: {
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