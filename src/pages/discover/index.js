import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'

import {
  dicoverMenu
} from "@/utils/local-data";

import { DiscoverWrapper, Menu } from './style'

export default memo(function Discover () {
  return (
    <DiscoverWrapper>
      <div className="top">
        <Menu className="wrap-v1">
          {
            dicoverMenu.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })
          }
        </Menu>
      </div>
    </DiscoverWrapper>
  )
})