/* @flow */
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'

export default function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" exact component={Counter} />
      </Switch>
    </Fragment>
  )
}
