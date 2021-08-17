import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playReducer } from '@/pages/player/store'

export default combineReducers({
  recommend: recommendReducer,
  player: playReducer,
})
