var Sequelize = require('sequelize');

var schemaRestaurant = {};

    schemaRestaurant.name = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaRestaurant.cuisine = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaRestaurant.price = {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

var optionsRestaurant = {} 

module.exports ={
    schemaRestaurant: schemaRestaurant,
    optionsRestaurant: optionsRestaurant
} 