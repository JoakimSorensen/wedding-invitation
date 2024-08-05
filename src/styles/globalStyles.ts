import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'bookkMJ',
      src: "url('/static/fonts/bookkMJ.ttf') format('truetype')",
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'bookkMJ_bold',
      src: "url('/static/fonts/bookkMJ_bold.ttf') format('truetype')",
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  // You can add other global styles here if needed
  body: {
    fontFamily: 'bookkMJ, sans-serif',
  },
});
