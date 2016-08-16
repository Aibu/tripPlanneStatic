var Sequelize = require('sequelize');

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

module.exports = {
    schemaHotel: schemaHotel,
    optionsHotel: optionsHotel
};