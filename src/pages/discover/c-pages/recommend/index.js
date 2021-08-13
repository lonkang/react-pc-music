import React, { memo } from 'react'

import TopBanner from './components/top-banners'
import HotRecommends from './components/hot-recommeds'
import NewAlbum from './components/new-album'
import RaningkList from './components/ranking-list'

import { Content, RecommendLeft } from './style'

export default memo(function Recommend() {
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommends />
          <NewAlbum />
          <RaningkList />
        </RecommendLeft>
      </Content>
    </div>
  )
})
