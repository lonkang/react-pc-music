import React, { useEffect, useRef, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import ThemeHeaderCMP from '@/components/theme-header-cmp'

import { getNewAlbums } from '../../store/actionCreateors'
import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './style'

export default memo(function HYNewAlbum(props) {
  // redux
  const state = useSelector(
    (state) => ({
      newAlbum: state.getIn(['recommend', 'newAlbum']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  const carouselRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbums())
  }, [dispatch])
  console.log(state.newAlbum)
  return (
    <AlbumWrapper>
      <ThemeHeaderCMP title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {state.newAlbum
                    .slice(item * 5, (item + 1) * 5)
                    .map((item) => {
                      return <AlbumCover key={item.id} info={item} />
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  )
})
