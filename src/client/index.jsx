// import './styles/velocity-suite.css'
import './styles/main.css'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import makeReduxStore from './redux'
import reducers from './redux/reducers'

const store = makeReduxStore(reducers)
const basename = 'bike-stuff'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router basename={basename}>
        <Route component={AppContainer} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
