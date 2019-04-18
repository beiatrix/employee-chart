import React, {Component} from 'react'

export default class AddEmployee extends Component {
  render() {
    return (
      <form>
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
