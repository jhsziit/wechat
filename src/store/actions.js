export default{
  get_wechat_list ({commit}) {
    let list = require('../mock/chat');
    commit('GET_WECHAT_LIST', list)
  }
}
