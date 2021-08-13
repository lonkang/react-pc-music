import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

function ThemeHeaderCMP(props) {
  const { title, keywords } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="#/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

ThemeHeaderCMP.defaultProps = {
  keywords: [],
}

ThemeHeaderCMP.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}

export default memo(ThemeHeaderCMP)
