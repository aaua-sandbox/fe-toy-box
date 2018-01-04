/* @flow */
/* pages/Counterの状態を管理 */

// Constants
export const INCREMENT = 'counter/increment'

// Action Creators
export function increment() {
  return {
    type: INCREMENT // action.type
  }
}

// Reducer
export type Action = $Call<typeof increment>

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

// Reducer
export default (state: State = initialState, action: Action): State => {
  // action.typeに応じたアクションを元に状態遷移を行う
  switch (action.type) {
    case INCREMENT: {
      return { ...state, value: state.value + 1 }
    }
    default: {
      return state
    }
  }
}