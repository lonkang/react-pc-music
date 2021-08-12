import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecommend } from './store/actionCreateors'

export default memo(function Recommend () {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.recommend, shallowEqual)
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])
  console.log(state)
  return (
    <div>123
      {state.recommends.length}

    </div>
  )
})
