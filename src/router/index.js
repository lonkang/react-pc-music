import React, { lazy } from 'react';
import { Redirect } from "react-router-dom";

const HYDiscover = lazy(() => import("../pages/discover"))
const firend = lazy(() => import("../pages/firend"))
const mine = lazy(() => import("../pages/mine"))
const HYRecommend = React.lazy(() => import("../pages/discover/c-pages/recommend"));
const HYRanking = React.lazy(() => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(() => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(() => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(() => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(() => import("../pages/discover/c-pages/album"));
const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"} />
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },

    ]
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