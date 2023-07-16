import { createTheme, lighten, darken } from '@mui/material'

const themeColors = {
  primary: '#000',
  secondary: '#F3E74E',
  success: '#57CA22',
  warning: '#E5704B',
  error: '#FF1943',
  info: '#33C2FF',
  white: '#ffffff',
}

export const theme = createTheme({
  palette: {
    primary: {
      darker: '#575757',
      main: '#151515',
      light: '#A9A9A9',
      lighter: '#D1D1D1',
      lightest: '#EBEBEB', 
    },
    secondary: {
      darker: '#268062',
      main: '#31ad84',
      light: '#29cf97',
      lighter: '#20e3a2',
      lightest: '#03fca9',  
    },
    success: {
      darker: darken(themeColors.success, 0.2),
      main: themeColors.success,
      lighter: lighten(themeColors.success, 0.3) 
    },
    warning: {
      darker: darken(themeColors.warning, 0.2),
      main: themeColors.warning,
      lighter: lighten(themeColors.warning, 0.3) 
    },
    error: {
      darker: darken(themeColors.error, 0.2),
      main: themeColors.error,
      lighter: lighten(themeColors.error, 0.3) 
    },
    info: {
      darker: darken(themeColors.info, 0.2),
      main: themeColors.info,
      lighter: lighten(themeColors.info, 0.3) 
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 960,
      breakpoint: 1170,
      lg: 1260,
      xl: 1840,
    },
  },
  spacing: 9,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1,
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
  }
})
