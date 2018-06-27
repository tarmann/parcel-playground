import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'

import reducer from './reducers/index'

const store = createStore(reducer)

const router = (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
