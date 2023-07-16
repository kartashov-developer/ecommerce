import React from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

import { useRoutes } from 'react-router-dom'

import routes from './router'

function App() {
  const content = useRoutes(routes)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  )
}

export default App
