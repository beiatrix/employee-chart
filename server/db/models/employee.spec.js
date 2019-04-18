/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Employee = db.model('employee')

describe('Employee model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let employee

  beforeEach(async () => {
    employee = await Employee.create({
      name: 'Michael Scott'
    })
  })

  it('returns true if name is correct', () => {
    expect(employee.name).to.be.equal('Michael Scott')
  })
}) // end describe('Employee model')
