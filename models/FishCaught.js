const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FishCaught extends Model {}

FishCaught.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date_caught: {
            type: DataTypes.STRING,
            allowNull: false
        },
        angler_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fish: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'fish_caught'
    }
);

module.exports = FishCaught;