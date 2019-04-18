import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_ALL_EMPLOYEES = 'GOT_ALL_EMPLOYEES'
const GOT_NEW_EMPLOYEE = 'GOT_NEW_EMPLOYEE'

/**
 * INITIAL STATE
 */
const empState = []

/**
 * ACTION CREATORS
 */
const gotEmployees = employees => ({
  type: GOT_ALL_EMPLOYEES,
  employees
})

const gotNewEmployee = employee => ({
  type: GOT_NEW_EMPLOYEE,
  employee
})

/**
 * THUNK CREATORS
 */
export const getEmployees = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/employees')
    dispatch(gotEmployees(data || empState))
  } catch (err) {
    console.error(err)
  }
}

export const createEmployee = employee => async dispatch => {
  try {
    const {data} = await axios.post('/api/employees', employee)
    dispatch(gotNewEmployee(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = empState, action) {
  switch (action.type) {
    case GOT_ALL_EMPLOYEES:
      return action.employees
    case GOT_NEW_EMPLOYEE:
      return [...state, action.employee]
    default:
      return state
  }
}
