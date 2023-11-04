module.exports = (sequelize, DataTypes) => {

    const Record = sequelize.define("Record", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Record

}