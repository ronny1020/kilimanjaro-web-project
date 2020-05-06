import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6e8080',
    },
    secondary: {
      main: '#f7f7f7',
    },
    error: {
      main: '#fab5b5',
    },
    success: {
      main: '#a3d3d7',
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: "'Noto Sans TC', sans-serif",
  },
})

ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.Fragment>,
  // </React.StrictMode>
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
