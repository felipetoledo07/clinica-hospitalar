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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Patient.associate = (models) => {
        Patient.hasMany(models.Appointment, {
             foreignKey: { allowNull: false }
        });
    }

    return Patient

}