var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

var schemaActivity = {};

    schemaActivity.name = {
        type: Sequelize.STRING,
        allowNull: false
    }

    schemaActivity.age_range = {
        type: Sequelize.STRING,
        allowNull: false
    }

var optionsActivity = {}

var Activity = db.define('activity', schemaActivity, optionsActivity );

module.exports = Activity;