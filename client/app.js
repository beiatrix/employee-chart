import React from 'react'

import {AllEmployees, AddEmployee} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      <h1>Employees</h1>
      <AddEmployee />
      <AllEmployees />
    </div>
  )
}

export default App
