var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

var schemaHotel = {};

    schemaHotel.name = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaHotel.num_stars = {
        type: Sequelize.FLOAT,
        allowNull: false
    }

    schemaHotel.amenities = {
        type: Sequelize.STRING,
        allowNull: false
    }

var optionsHotel = {};

var Hotel = db.define('hotel', schemaHotel, optionsHotel );

module.exports = Hotel;