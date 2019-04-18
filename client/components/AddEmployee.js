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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const newEmp = {...this.state}
    console.log('new emp', newEmp)

    const addEmp = await axios.post('/api/employees', newEmp)

    // clear input field
    this.setState({
      name: ''
    })
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
