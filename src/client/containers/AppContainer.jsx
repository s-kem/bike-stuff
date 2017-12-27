import '../styles/containers/AppContainerStyles.css'
import { Route, Switch } from 'react-router-dom'
import RatioContainer from './RatioContainer'
import React from 'react'

const AppContainer = () => (
  <Switch>
    <Route component={RatioContainer} path='/' />
  </Switch>
)

AppContainer.defaultTypes = {
  userId: '',
}

export default AppContainer
