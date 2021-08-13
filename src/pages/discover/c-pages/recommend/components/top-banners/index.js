import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBanners } from '../../store/actionCreateors'

import { Carousel } from 'antd'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function TopBanners () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useDispatch()
  const bannerRef = useRef()

  const state = useSelector(
    (state) => ({
      banners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0)
  }, [])

  useEffect(() => {
    dispatch(getBanners())
  }, [dispatch])

  const bgImage =
    state.banners[currentIndex] &&
    state.banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {state.banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="left btn"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="right btn"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
