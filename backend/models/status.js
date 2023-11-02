module.exports = (sequelize, DataTypes) => {

    const Status = sequelize.define("Status", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Status.associate = (models) => {
        Status.hasMany(models.MedicalAppointment, {
             foreignKey: { allowNull: false }
        });
    }


    return Status

}