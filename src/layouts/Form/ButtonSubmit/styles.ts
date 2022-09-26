import { styled } from 'src/styles/stitches.config';

export const Button = styled('button', {
  display: 'block',
  margin: '0 auto',
  padding: '10px',
  height: 'max-content',
  width: '12.5rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '5px',
  color: '#fff',
  letterSpacing: '0.105em',
  background: '$primary',
  border: 'solid 1px $primary',
  transition: 'background .15s linear',

  '&:hover': {
    background: '$primaryDark',
  },
});
