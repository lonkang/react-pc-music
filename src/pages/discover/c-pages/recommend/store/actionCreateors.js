import * as actionTypes from "./constants";
import { getHotRecommend } from '@/api/recommends'


export const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_TO_RECOMMEND,
  recommends: res.result
})

export const getRecommend = () => {
  return dispatch => {
    getHotRecommend().then(res => {
      dispatch(changeRecommendAction(res.data))
    })
  }
}