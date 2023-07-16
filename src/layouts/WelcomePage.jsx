import React from 'react';

import Canvas from './Canvas/Canvas';
import SettingBar from './SettingBar/SettingBar';
import Toolbar from './Toolbar/Toolbar';

const WelcomePage = () => {
  return (
    <div>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  )
}

export default WelcomePage
