import * as actionTypes from './constants'
import { getSongDetail } from '@/api/player'
const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song,
})

export const getCurrentSong = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      const song = res.data.songs && res.data.songs[0]
      if (!song) return
      dispatch(changeCurrentSongAction(song))
    })
  }
}
