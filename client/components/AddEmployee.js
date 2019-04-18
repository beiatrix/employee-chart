import React, {Component} from 'react'
import axios from 'axios'

export default class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const {addEmployee} = this.props

    const employee = {...this.state}
    // console.log('new employee', employee)

    try {
      const res = await axios.post('/api/employees', employee)
      // console.log('what data is this', res.data)
      addEmployee(employee)

      // clear input field
      this.setState({
        name: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          name="name"
          type="text"
          onChange={this.handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>
    )
  }
}
