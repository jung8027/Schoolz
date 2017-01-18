'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER 
    },
    grade: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsTo(models.School)
      }
    }
  });
  return Student;
};