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
