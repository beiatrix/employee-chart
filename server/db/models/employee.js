const Sequelize = require('sequelize')
const db = require('../db')

const Employee = db.define('employee', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Employee
