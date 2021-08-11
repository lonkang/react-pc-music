import React, { lazy } from 'react';
import { Redirect } from "react-router-dom";

const discover = lazy(() => import("../pages/discover"))
const firend = lazy(() => import("../pages/firend"))
const mine = lazy(() => import("../pages/mine"))
const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: discover,
  },
  {
    path: '/firend',
    component: firend,
  },
  {
    path: '/mine',
    component: mine,
  }
]

export default routes