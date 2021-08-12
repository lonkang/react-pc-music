import * as actionTypes from './constants';

const defaultState = {
  recommends: []
}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TO_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state
  }
}