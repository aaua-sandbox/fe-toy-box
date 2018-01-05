/* @flow */
import React from 'react'
import CounterAtom from '../atoms/Counter'

export default function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <CounterAtom />
      <CounterAtom />
    </div>
  )
}