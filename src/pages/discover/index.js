import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {
  dicoverMenu
} from "@/utils/local-data";

import { DiscoverWrapper, Menu } from './style'

export default memo(function Discover (props) {
  const { route } = props;
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
        {renderRoutes(route.routes)}
      </div>
    </DiscoverWrapper>
  )
})
