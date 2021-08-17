import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Slider } from 'antd'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

import { getCurrentSong } from '../store/actionCreators'

import { getPlayUrl, formatMinuteSecond } from '@/utils/format-utils'

export default memo(function AppPlayerBar() {
  // props/state
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setChange] = useState(false)

  // redux hooks
  const dispatch = useDispatch()

  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )
  // other hooks
  const audioRef = useRef()

  // 初始化获取歌曲
  useEffect(() => {
    dispatch(getCurrentSong(167876))
  }, [dispatch])

  // 获取到src
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play()
    setDuration(currentSong.dt)
  }, [currentSong])

  // 修改状态
  const play = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false)
        })
  }, [isPlaying])

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChange) {
      setProgress(((currentTime * 1000) / duration) * 100)
      setCurrentTime(currentTime)
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setProgress(value)
      const time = ((value / 100.0) * duration) / 1000
      setCurrentTime(time)
      setChange(true)
    },
    [duration]
  )
  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000
      audioRef.current.currentTime = time
      setCurrentTime(time)
      setChange(false)
      if (!isPlaying) {
        play()
      }
    },
    [duration, isPlaying, play]
  )
  const formatter = useCallback(
    (value) => {
      return formatMinuteSecond((duration / 100) * value)
    },
    [duration]
  )
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev"></button>
          <button
            className="sprite_playbar btn play extendClick"
            onClick={(e) => play()}
          ></button>
          <button className="sprite_playbar btn next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">
                {currentSong.ar && currentSong.ar[0].name}
              </span>
            </div>
            <div className="progress">
              <Slider
                tipFormatter={formatter}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
        <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
      </div>
    </PlaybarWrapper>
  )
})
