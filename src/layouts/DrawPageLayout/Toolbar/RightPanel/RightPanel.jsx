import React from 'react'

import { Box } from '@mui/material'

import ToolbarIcon from '../../../../components/ToolbarIcon/ToolbarIcon'

const RightPanel = () => {
  return (
    <Box sx={{display: 'flex', gap: '30px', pr: 2}}>
      <ToolbarIcon src='../../../../public/static/images/save.svg' text='Save' />
      <Box sx={{display: 'flex'}}>
        <ToolbarIcon 
          src='../../../../public/static/images/arrow-left.svg' text='Backward' />
        <ToolbarIcon 
          src='../../../../public/static/images/arrow-right.svg' text='Forward' />
      </Box>
    </Box>
  )
}

export default RightPanel
