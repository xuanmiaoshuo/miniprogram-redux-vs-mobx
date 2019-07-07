import { observer } from 'wechat-weapp-mobx/observer'
import { observable, action, decorate } from 'wechat-weapp-mobx/mobx'

// 定义数据结构
class Store {
  a = 0
}

// 定义对数据的操作
class Action {
  constructor({ store }) {
    this.store = store
  }

  incA = () => {
    this.store.a++
  }
  decA = () => {
    this.store.a--
  }
  double = () => {
    this.store.a *= 2
  }
}

// ① 使用 observable
decorate(Store, {
  a: observable,
})

// ② 使用 action
decorate(Action, {
  incA: action,
  decA: action,
  double: action
})

// ③实例化单一数据源
const store = new Store()

// ④实例化 actions，并且和 store 进行关联
const actions = new Action({ store })

// ⑤ 使用observer
Page(observer({
  // 向业务组件注入 store，actions，和 Provider 配合使用
  props: {
    store
  },

  incA: actions.incA,
  decA: actions.decA,
  double: actions.double
}))
