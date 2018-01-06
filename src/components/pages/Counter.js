/* @flow */
import React from 'react'
import CounterAtom from '../atoms/Counter'
import CounterHogeAtom from '../atoms/CounterHoge'

export default function Counter() {
  return (
    <section>
      <h1>pages/counter</h1>
      <CounterAtom />
      <CounterHogeAtom />
    </section>
  )
}
