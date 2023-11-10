module.exports = (sequelize, DataTypes) => {

    const Certificate = sequelize.define("Certificate", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        suspention: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    })

    Certificate.associate = (models) => {
        Certificate.belongsTo(models.Appointment);
    }

    return Certificate

}