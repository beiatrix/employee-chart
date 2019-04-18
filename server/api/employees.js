const router = require('express').Router()
const {Employee} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const employees = await Employee.findAll()
    res.json(employees)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const employee = await Employee.create({
      name: req.body.name
    })
    res.json(employee)
  } catch (err) {
    next(err)
  }
})
