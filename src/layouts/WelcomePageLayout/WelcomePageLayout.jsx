import React from 'react'
import { Outlet } from 'react-router'

const WelcomePageLayout = () => {
  return (
    <div>
      <h1>
        WelcomePageLayout
      </h1>
      <Outlet />
    </div>
  )
}

export default WelcomePageLayout
