import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  position: 'absolute',
  right: '20px',
  display: 'none',

  '@800': {
    display: 'block',
  },
});
