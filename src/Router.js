import React from 'react'
import { Switch, Route } from 'react-router'
import AuthFormContainer from './containers/AuthFormContainer'
import Onboarding from './components/Onboarding'
import StickeePathWrapperComponent from './components/StickeePathWrapperComponent'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={AuthFormContainer} />
      <Route exact path='/signup' component={AuthFormContainer} />
      <Route path='/onboarding' component={Onboarding} />
      <Route path='/stickee' component={StickeePathWrapperComponent} />
    </Switch>
  )
}

export default Router
