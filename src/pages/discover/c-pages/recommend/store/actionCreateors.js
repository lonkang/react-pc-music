import * as actionTypes from './constants'
import {
  getHotRecommend,
  getTopBanner,
  getNewAlbum,
  getTopList,
} from '@/api/recommends'

export const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_TO_RECOMMEND,
  recommends: res.result,
})

export const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TO_BANNDER,
  banners: res.banners,
})

export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums,
})

export const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist,
})

export const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist,
})

export const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
})

export const getRecommend = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => {
      dispatch(changeRecommendAction(res.data))
    })
  }
}

export const getBanners = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res.data))
    })
  }
}

export const getNewAlbums = () => {
  return (dispatch) => {
    getNewAlbum({
      limit: 10,
      offset: 0,
    }).then((res) => {
      dispatch(changeNewAlbumAction(res.data))
    })
  }
}

export const getTopUpList = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      console.log(res)
      switch (idx) {
        case 0:
          dispatch(changeNewListAction(res.data))
          break
        case 2:
          dispatch(changeOriginListAction(res.data))
          break
        case 3:
          dispatch(changeUpListAction(res.data))
          break
        default:
          console.log('其他数据处理')
      }
    })
  }
}
