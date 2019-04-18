import React, {Component} from 'react'
import {getEmployees} from '../store'
import {connect} from 'react-redux'

import AddEmployee from './AddEmployee'
import {Link} from 'react-router-dom'
import axios from 'axios'

class AllEmployees extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     employees: []
  //   }
  //   this.addEmployee = this.addEmployee.bind(this)
  // }

  // addEmployee(employee) {
  //   let stateCopy = this.state.employees.slice()

  //   stateCopy.push(employee)

  //   this.setState({
  //     employees: stateCopy
  //   })
  // }

  async componentDidMount() {
    await this.props.getEmployees()
    // const res = await axios.get('/api/employees')
    // const employees = res.data

    // this.setState({
    //   employees
    // })
  }

  render() {
    const {employee} = this.props
    console.log('employee?', employee)
    return (
      <div>
        {/* <AddEmployee addEmployee={this.addEmployee} /> */}
        {employee && employee.length ? (
          employee.map(e => {
            return (
              <Link to="/employees/1" key={e.id}>
                {e.name}
              </Link>
            )
          })
        ) : (
          <p>loading employee data...</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  employee: state.employee
})

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEmployees)
