import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './button/button'

const App = (props) => {
  return(
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <Button>Foo Button</Button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

