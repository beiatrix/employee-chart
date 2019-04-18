import React, {Component} from 'react'
// import {getEmployees} from '../store'
// import {connect} from 'react-redux'
import axios from 'axios'

export default class AllEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: []
    }
  }
  async componentDidMount() {
    const emp = await axios.get('/api/employees')
    const data = emp.data
    console.log(data)
    this.setState({
      employees: data
    })
  }

  render() {
    const {employees} = this.state
    return (
      <div>
        <h1>All Employees</h1>
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
