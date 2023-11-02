module.exports = (sequelize, DataTypes) => {

    const MedicalAppointment = sequelize.define("MedicalAppointment", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })

    return MedicalAppointment

}