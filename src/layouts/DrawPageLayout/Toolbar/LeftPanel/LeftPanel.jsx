import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import ToolbarIcon from '../../../../components/ToolbarIcon/ToolbarIcon'
import ToolbarInput from '../../../../components/ToolbarInput/ToolbarInput'

const LeftPanel = () => {
  return (
    <Box sx={{display: 'flex', gap: '30px', pl: 2}}>
      <ToolbarIcon 
        src='../../../../public/static/images/brush.svg' 
        text='Brush' />
      <ToolbarIcon 
        src='../../../../public/static/images/rectangle.svg' 
        text='Fill' />
      <ToolbarInput />
      <ToolbarIcon 
        src='../../../../public/static/images/circle.svg' 
        text='' />
      <ToolbarIcon 
        src='../../../../public/static/images/eraser.svg' 
        text='Eraser' />
      <ToolbarIcon 
        src='../../../../public/static/images/line.svg' 
        text='Line' />
    </Box>
  )
}

export default LeftPanel
