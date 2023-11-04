module.exports = (sequelize, DataTypes) => {

    const Recipe = sequelize.define("Recipe", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avaliability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    })


    return Recipe

}