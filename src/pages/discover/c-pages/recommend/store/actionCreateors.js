import * as actionTypes from './constants'
import { getHotRecommend, getTopBanner, getNewAlbum } from '@/api/recommends'

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
