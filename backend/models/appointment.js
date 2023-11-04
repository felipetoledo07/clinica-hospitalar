module.exports = (sequelize, DataTypes) => {

    const Appointment = sequelize.define("Appointment", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })

    Appointment.associate = (models) => {
        Appointment.hasOne(models.Record, {
             foreignKey: { allowNull: false }
        });
    }

    Appointment.associate = (models) => {
        Appointment.hasOne(models.Certificate);
    }

    Appointment.associate = (models) => {
        Appointment.hasMany(models.Recipe);
    }

    return Appointment

}