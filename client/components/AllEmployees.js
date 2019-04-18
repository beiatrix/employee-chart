import React, {Component} from 'react'
// import {getEmployees} from '../store'
// import {connect} from 'react-redux'
import AddEmployee from './AddEmployee'
import axios from 'axios'

export default class AllEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: []
    }
    this.addEmployee = this.addEmployee.bind(this)
  }

  addEmployee(employee) {
    let stateCopy = this.state.employees.slice()

    stateCopy.push(employee)

    this.setState({
      employees: stateCopy
    })
  }

  async componentDidMount() {
    // await this.props.getEmployees()
    const res = await axios.get('/api/employees')
    const employees = res.data

    this.setState({
      employees
    })
  }

  render() {
    const {employees} = this.state
    return (
      <div>
        <AddEmployee addEmployee={this.addEmployee} />
        {employees.length ? (
          employees.map(e => {
            return <p key={e.id}>{e.name}</p>
          })
        ) : (
          <p>loading employee data...</p>
        )}
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   employees: state.employees
// })

// const mapDispatchToProps = dispatch => ({
//   getEmployees: () => dispatch(getEmployees())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AllEmployees)
