import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './button/button'
import PublishModal from './PublishModal/PublishModal'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { modalType: 'default' }
    this.handleModalTypeChange = this.handleModalTypeChange.bind(this)
  }

  handleModalTypeChange(event) {
    this.setState({modalType: event.target.value})
  }

  render(){
    return(
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <Button>Foo Button</Button>
        <hr/>
        <input type="text" value={this.state.modalType} onChange={this.handleModalTypeChange} />
        <PublishModal modalType={this.state.modalType} />
      </div>
    )
  }
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

