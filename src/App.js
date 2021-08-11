import React, { memo, Suspense } from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import routes from '@/router'
export default memo(function App () {
  return (
    <HashRouter>
      < Header />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      < Footer />
    </HashRouter>
  )
})
