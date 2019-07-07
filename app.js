import { Provider } from 'wechat-weapp-redux'
import { createStore } from 'redux'
// ①action types
const COUNTER_ADD = 'counter_add'
const COUNTER_DEC = 'counter_dec'
const COUNTER_DOUBLE = 'counter_double'

// ②reducers
const initialState = { a: 0 }

function reducers(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ADD:
      return { ...state, a: state.a + 1 }
    case COUNTER_DEC:
      return { ...state, a: state.a - 1 }
    case COUNTER_DOUBLE:
      return { ...state, a: state.a * 2 }
    default:
      return state
  }
}

const store = createStore(reducers)

// 向业务组件注入 store，actions，和 Provider 配合使用
App(Provider(store)({
  onLaunch: function () {}
}))
