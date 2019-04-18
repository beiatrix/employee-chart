import {createBrowserHistory, createMemoryHistory} from 'history'
// import createMemoryHistory from 'history/createMemoryHistory'

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory()

export default history
