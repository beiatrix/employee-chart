/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Employee = db.model('employee')

describe('Employee routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/employees/', () => {
    const name = 'Michael Scott'

    beforeEach(() => {
      return Employee.create({
        name
      })
    })

    it('GET /api/employees/', async () => {
      const res = await request(app)
        .get('/api/employees/')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(name)
    })
  }) // end describe('/api/employees')
}) // end describe('Employee routes')
