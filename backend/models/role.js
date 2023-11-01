module.exports = (sequelize, DataTypes) => {

    const Role = sequelize.define("Role", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Role.associate = (models) => {
        Role.hasMany(models.Doctor, {
             foreignKey: { allowNull: false }
        });
    }

    return Role

}