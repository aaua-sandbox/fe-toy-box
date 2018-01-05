/* @flow */
import React from 'react'
import enhancer from '../../enhancers/counterEnhancer'
import Label from '../atoms/Label'

/* 
  props.actions.increment()でcounterEnhancerのCounterActionsで参照された
  reducersのincrement(ActionCreators)を呼び出す.
  incrementが呼び出されることでaction.typeにINCREMENTがセットされReducerによりstate.valueが加算される
 */
export default enhancer(props => {
  return (
    <div>
      <Label text={props.value.toString()} />
      <button onClick={() => props.actions.increment()}>+</button>
      <button onClick={() => props.actions.decrement()}>-</button>
    </div>
  )
})