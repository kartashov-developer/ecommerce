import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { Style } from '@mui/icons-material'

const StyledButton = styled(Button)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.primary.light};
    margin: 5px;
  `
)
const Component = () => {
  return (
    <div>
      <StyledButton>
        Hello
      </StyledButton>
    </div>
  )
}

export default Component
