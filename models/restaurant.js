var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

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

var Restaurant = db.define('restaurant', schemaRestaurant, optionsRestaurant ); 

module.exports = Restaurant;