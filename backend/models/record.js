module.exports = (sequelize, DataTypes) => {

    const Record = sequelize.define("Record", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Record.associate = (models) => {
        Record.belongsTo(models.Appointment, {
             foreignKey: { allowNull: false }
        });
    }

    return Record

}