import React from 'react'

import { Box, Input, Typography } from '@mui/material'

const ToolbarInput = () => {
  return (
    <Box 
      sx={{ 
        height: '40px', 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column',
        paddingTop: '8px'
      }}>
      <Input 
      type='color' 
      disableUnderline />
      <Typography variant='body2'>Palette</Typography>
  </Box>
  )
}

export default ToolbarInput
