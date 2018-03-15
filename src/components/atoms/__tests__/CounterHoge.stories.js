/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import CounterHoge from '../CounterHoge'
import { Provider } from 'react-redux'
import createStore from '../../../store/createStore'

storiesOf('Counter', module).add(
  '<Provider store={ store }><CounterHoge /></Provider>',
  () => (
    <Provider store={createStore()}>
      <CounterHoge />
    </Provider>
  )
)
