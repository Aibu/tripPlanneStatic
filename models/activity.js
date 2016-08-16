var Sequelize = require('sequelize');

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

module.exports = {
	schemaActivity: schemaActivity,
	optionsActivity: optionsActivity
}