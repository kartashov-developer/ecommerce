import { createTheme, alpha, lighten, darken } from '@mui/material'

const themeColors = {
  primary: '#000',
  secondary: '#F3E74E',
  success: '#57CA22',
  warning: '#E5704B',
  error: '#FF1943',
  info: '#33C2FF',
  white: '#ffffff',
}

const colors = {
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    trueWhite: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    black: {
      5: alpha(themeColors.primary, 0.02),
      10: alpha(themeColors.primary, 0.1),
      30: alpha(themeColors.primary, 0.3),
      50: alpha(themeColors.primary, 0.5),
      70: alpha(themeColors.primary, 0.7),
      100: themeColors.primary
    },
  },
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  }
};

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
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,
        },
        sizeMedium: {
          backgroundColor: colors.alpha.white[5],
          '&:hover': {
            backgroundColor: colors.alpha.black[10]
          },
          '&:focus': {
            backgroundColor: colors.alpha.black[30]
          }
        },
      }
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: 0
        }
      
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 0
        },
        input: {
          padding: 0,
          height: '30px',
          width: '30px'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7,
        },
      },
    },
  },
  typography: {
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: 32,
    },
    h2: {
      fontWeight: 700,
      fontSize: 26,
    },
    h3: {
      fontWeight: 700,
      fontSize: 22,
    },
    h4: {
      fontWeight: 700,
      fontSize: 18,
    },
    h5: {
      fontWeight: 700,
      fontSize: 15,
    },
    body1: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 18,
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: 12,
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
})
