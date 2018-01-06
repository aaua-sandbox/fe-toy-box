/* @flow */
/* 
 Enhancer

 recompose と ReactRedux.connect の HOC を Flow で合成して型付けしている
 https://qiita.com/mizchi/items/740a2410b71fada2f55b
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle, pure, type HOC } from 'recompose'
import * as CounterActions from '../reducers/counterHoge'
import { type State as RootState } from '../reducers/index'

type OuterProps = {}

type Props = {
  value: number,
  actions: typeof CounterActions
}

/* bindActionCreators: ActionCreatorを自動的にマッピング */
const connector = connect(
  (state: RootState, _props) => {
    return state.counterHoge
  },
  dispatch => ({ actions: bindActionCreators({ ...CounterActions }, dispatch) })
)

/*
  https://github.com/acdlite/recompose/blob/master/docs/API.md
  compose: 複数のHOCを単一のHOCに合成.合成は右から左に行われる.
    例:
    function a(arg) { ...; return something; }
    function b(arg) { ...; return something; }

    // function composed(arg) {
    //  return a(b(arg));
    // }
    const composed = compose(a, b);

 pure: propが変更されていない限りコンポーネントが更新されないようにする
 lifecycle: React.Componentのlifecycleを管理
 */
const enhancer: HOC<Props, OuterProps> = compose(
  connector,
  pure,
  lifecycle({
    componentDidMount() {
      console.log('mounted coungerHoge')
    }
  })
)

export default enhancer
