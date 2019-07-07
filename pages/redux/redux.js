import { connect } from 'wechat-weapp-redux'
// ①action types
const COUNTER_ADD = 'counter_add'
const COUNTER_DEC = 'counter_dec'
const COUNTER_DOUBLE = 'counter_double'

// ③action creator
const incA = () => ({ type: COUNTER_ADD })
const decA = () => ({ type: COUNTER_DEC })
const double = () => ({ type: COUNTER_DOUBLE })

const pageConfig = {}

// ④将state映射到组件data
const mapStateToData = state => ({ store: state })

// ⑤将actions映射到组件的data
const mapDispatchToPage = dispatch => ({
  incA: () => dispatch(incA()),
  decA: () => dispatch(decA()),
  double: () => dispatch(double())
})

// ⑥connect产生容器组件
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig)
