import React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'

import RightPanel from './RightPanel/RightPanel'
import LeftPanel from './LeftPanel/LeftPanel'

const StyledBox = styled(Box)(
  ({theme}) => `
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    background-color: ${theme.palette.primary.lightest};
    box-shadow: 0 4px 5px gray;
  `
)

const Toolbar = () => {
  return (
    <StyledBox>
      <LeftPanel />
      <RightPanel />
    </StyledBox>
  )
}

export default Toolbar
