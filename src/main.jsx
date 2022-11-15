import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { rootReducer } from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import './index.css'

const composedEnhancers = compose(
  applyMiddleware(thunk)
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
