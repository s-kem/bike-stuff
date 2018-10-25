import '../styles/containers/AppContainerStyles.css'
import { Route, Switch } from 'react-router-dom'
import RatioContainer from './RatioContainer'
import React from 'react'
import WattsPerKgContainer from './WattsPerKgContainer'

const AppContainer = () => (
  <Switch>
    <Route component={RatioContainer} path='/gear-ratios' />
    <Route component={WattsPerKgContainer} path='/watts-per-kg' />
  </Switch>
)

AppContainer.defaultTypes = {
  userId: '',
}

export default AppContainer
