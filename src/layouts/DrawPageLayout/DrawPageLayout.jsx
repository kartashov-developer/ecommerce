import React from 'react';

import { Container } from '@mui/material';
import { styled } from '@mui/system';

import Canvas from './Canvas/Canvas';
import SettingBar from './SettingBar/SettingBar';
import Toolbar from './Toolbar/Toolbar';
import Footer from './Footer/Footer'

const WrapperContainer = styled(Container)(
  ({theme}) => `
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    background-color: ${theme.palette.primary.lighter};
  `
)

const WelcomePage = () => {
  return (
    <WrapperContainer disableGutters maxWidth>
      <Toolbar />
      <SettingBar />
      <Canvas />
      <Footer />
    </WrapperContainer>
  )
}

export default WelcomePage
