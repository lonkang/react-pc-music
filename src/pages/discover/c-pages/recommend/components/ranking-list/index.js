import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopUpList } from '../../store/actionCreateors'
import { RankingWrapper } from './style'
import ThemeHeaderCMP from '@/components/theme-header-cmp'
import TopRanking from '@/components/top-ranking'

export default memo(function RaningkList() {
  const dispatch = useDispatch()

  const state = useSelector(
    (state) => ({
      topUpList: state.getIn(['recommend', 'topUpList']),
      topNewList: state.getIn(['recommend', 'topNewList']),
      topOriginList: state.getIn(['recommend', 'topOriginList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getTopUpList(0))
    dispatch(getTopUpList(2))
    dispatch(getTopUpList(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <ThemeHeaderCMP title="榜单" />
      <div className="tops">
        <TopRanking info={state.topUpList} />
        <TopRanking info={state.topNewList} />
        <TopRanking info={state.topOriginList} />
      </div>
    </RankingWrapper>
  )
})
