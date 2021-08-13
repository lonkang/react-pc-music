import React, { memo, useEffect, Fragment } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecommend } from '../../store/actionCreateors'

import ThemeHeaderCMP from '@/components/theme-header-cmp'
import ThemeCover from '@/components/theme-cover'
import { RecommendListWrapper } from './style'

export default memo(function Recommends() {
  const state = useSelector(
    (state) => ({
      recommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])
  return (
    <Fragment>
      <ThemeHeaderCMP
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <RecommendListWrapper>
        {state.recommends.map((item) => {
          return <ThemeCover info={item} key={item.id} />
        })}
      </RecommendListWrapper>
    </Fragment>
  )
})
