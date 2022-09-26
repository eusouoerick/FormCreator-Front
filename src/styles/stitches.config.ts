import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      primary: '#632ff5',
      primaryDark: '#2a078b',
      textColor: '#000',
      textColorBlur: '#404040',
      textColorGrey: '#7C7C7C',
      bgWhite: '#F9F9F9',
      border: 'solid 1px #ededed',
      background: '#F5F5F5',
      inputBackground: '#f4f2f2',
      inputBorder: '#d8d8d8',
    },
    fontSizes: {
      big: '24px',
      medium: '22px',
      small: '18px',
      xSmall: '16px',
    },
  },
  media: {
    tablet: '(min-width: 720px)',
    desktop: '(min-width: 1280px)',
  },
});

export const GlobalStyles = globalCss({
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap")',
  ],

  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Inter',
    boxSizing: 'border-box',
  },
  body: {
    background: '$background',
  },
});
