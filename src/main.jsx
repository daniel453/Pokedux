import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { rootReducers } from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import './index.css'

const store = configureStore({
  reducer: rootReducers
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
