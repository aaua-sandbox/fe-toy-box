/* @flow */
/* reduxで状態遷移を管理 */
import { combineReducers } from 'redux'
import counter, { type Action as CounterAction } from './counter'
import counterHoge, { type Action as CounterHogeAction } from './counterHoge'

// export type Action = CounterAction // TODO: 不要？

export type State = {
  counter: $Call<typeof counter, void, any>,
  counterHoge: $Call<typeof counterHoge, void, any>
}

export default combineReducers({ counter, counterHoge })