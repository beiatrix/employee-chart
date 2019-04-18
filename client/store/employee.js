import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_ALL_EMPLOYEES = 'GOT_ALL_EMPLOYEES'

/**
 * INITIAL STATE
 */
const defaultEmps = []

/**
 * ACTION CREATORS
 */
const gotEmployees = employees => ({
  type: GOT_ALL_EMPLOYEES,
  employees
})

/**
 * THUNK CREATORS
 */
export const getEmployees = () => async dispatch => {
  try {
    const res = await axios.get('/api/employees')
    dispatch(gotEmployees(res.data || defaultEmps))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultEmps, action) {
  switch (action.type) {
    case GOT_ALL_EMPLOYEES:
      return [...state, ...action.employees]
    default:
      return state
  }
}
