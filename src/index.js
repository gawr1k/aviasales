import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import { Provider } from 'react-redux'

import App from './components/App/App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
