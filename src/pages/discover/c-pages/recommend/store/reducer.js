import * as actionTypes from './constants'
import { Map } from 'immutable'
const defaultState = Map({
  hotRecommends: [], // 热门推荐数据
  topBanners: [], // 轮播图数据
  newAlbum: [], // 新碟上架数据
  // 榜单数据
  topUpList: {},
  topNewList: {},
  topOriginList: {},
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TO_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case actionTypes.CHANGE_TO_BANNDER:
      return state.set('topBanners', action.banners)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    case actionTypes.CHANGE_UP_LIST:
      return state.set('topUpList', action.topUpList)
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('topNewList', action.topNewList)
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set('topOriginList', action.topOriginList)
    default:
      return state
  }
}
