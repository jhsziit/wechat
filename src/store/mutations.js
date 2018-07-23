import {
  SET_HEAD_TITLE,
  GET_WECHAT_LIST
} from './mutations-type'
export default {
  // 底部导航修改头部标题
  [SET_HEAD_TITLE] (state, index) {
    // state.headTitle = state.appNavs[index].text;
  },
  [GET_WECHAT_LIST] (state, list) {
    state.wechatList = list
    console.log(state.wechatList)
  },
}
