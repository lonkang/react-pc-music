import * as actionTypes from './constants'
import { Map } from 'immutable'
const defaultState = Map({
  hotRecommends: [],
  topBanners: [],
  newAlbum: [],
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TO_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case actionTypes.CHANGE_TO_BANNDER:
      return state.set('topBanners', action.banners)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    default:
      return state
  }
}
