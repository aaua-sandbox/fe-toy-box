/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Counter from '../Counter'
import { Provider } from 'react-redux'
import createStore from '../../../store/createStore'

storiesOf('Counter', module).add(
  '<Provider store={ store }><Counter /></Provider>',
  () => (
    <Provider store={createStore()}>
      <Counter />
    </Provider>
  )
)
