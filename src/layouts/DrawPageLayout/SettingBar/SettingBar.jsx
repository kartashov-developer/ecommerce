import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

const StyledBox = styled(Box)(
  ({theme}) => `
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    background-color: ${theme.palette.primary.lightest};
    box-shadow: 0 4px 5px gray;
    top: 56px;
  `
)

const SettingBar = () => {
  return (
    <StyledBox>SettingBar</StyledBox>
  )
}

export default SettingBar
