const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define("House", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        currentValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        loanAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        risk: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
            validate: {
                notEmpty: true,
            },
        }, 

    });

    House.prototype.calculateRisk = function() {
        let risk = this.loanAmount / this.currentValue;
        if (risk > 0.5) {
            risk += 0.1;
        }
        return Math.min(risk, 1);
    }

    return House;
}