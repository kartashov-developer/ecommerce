import React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'

const StyledIconButton = styled(IconButton)(
  ({}) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
)

const ToolbarIcon = ({ src, text }) => {
  return (
    <>
      <StyledIconButton disableRipple>
        <img src={src} />
        <Typography variant='body2'>{text}</Typography>
      </StyledIconButton>
    </>
  )
}

export default ToolbarIcon
