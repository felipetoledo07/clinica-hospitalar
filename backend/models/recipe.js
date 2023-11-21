module.exports = (sequelize, DataTypes) => {

    const Recipe = sequelize.define("Recipe", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avaliability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        expire_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })


    return Recipe

}