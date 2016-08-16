var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

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
        type: Sequelize.ARRAY(2),
        allowNull: false
    }

var optionsPlace = {};

var Place = db.define('place', schemaPlace, optionsPlace );

module.exports = Place