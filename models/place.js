var Sequelize = require('sequelize');

var schemaPlace = {};

    schemaPlace.ID = {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }

    schemaPlace.address = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaPlace.city = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaPlace.state = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaPlace.phone = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaPlace.location = {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    }

var optionsPlace = {};

module.exports =  {
    schemaPlace: schemaPlace,
    optionsPlace: optionsPlace
}