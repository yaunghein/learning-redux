import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ReduxStoreProvider } from './redux/store'

ReactDOM.render(
  <ReduxStoreProvider>
    <App />
  </ReduxStoreProvider>,
  document.getElementById('root')
)
