module.exports = {
  colors: {
    primary: 'rgb(0, 176, 164)',
    primaryHover: 'rgb(0, 166, 154)',
    primaryActive: 'rgb(0, 156, 144)',
    destructive: 'rgb(209, 50, 90)',
    destructiveHover: 'rgb(200, 40, 80)',
    destructiveActive: 'rgb(190, 30, 70)',
    disabled: 'rgb(190, 190, 190)',
    border: 'rgb(200, 200, 200)',
    text: 'rgb(40, 40, 40)',
    label: 'rgb(100, 100, 100)',
    backgroundLight: 'rgb(245, 245, 245)',
  },
  baselineGrid: 4,
  elementGrid: 8,
  direction: 'ltr',
  breakpoints: {
    small: '@media (min-width: 480px)',
    medium: '@media (min-width: 800px)',
    large: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1600px)',
  },
  typography: {
    label: {
      element: 'span',
      fontSize: 14.0,
      lineHeight: 16.0,
      color: 'rgb(100, 100, 100)',
      // baseline correction
      marginBottom: 1,
      paddingTop: 3,
    },
    body: {
      element: 'p',
      fontSize: 18.0,
      lineHeight: 24.0,
      // baseline correction
      marginBottom: 2,
      paddingTop: 2,
    },
    category: {
      element: 'h3',
      fontFamily: 'Lato',
      fontSize: 24.0,
      lineHeight: 28.0,
      fontWeight: 700,
      // baseline correction
      paddingTop: 1,
      marginBottom: 3,
    },
    subtitle: {
      element: 'h2',
      fontFamily: 'Lato',
      fontSize: 32.0,
      lineHeight: 40.0,
      fontWeight: 400,
    },
    title: {
      element: 'h1',
      fontFamily: 'Lato',
      fontWeight: 900,
      fontSize: 40.0,
      lineHeight: 52.0,
      // baseline correction
      marginTop: -1,
      paddingBottom: 1,
    },
  },
}
