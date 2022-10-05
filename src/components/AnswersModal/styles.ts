import { styled } from 'src/styles/stitches.config';
import ButtonSubmit from 'src/components/ButtonSubmit';

export const Blur = styled('div', {
  padding: '20px',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 999,
  width: '100vw',
  height: '100vh',
  background: 'rgb(0,0,0, 25%)',
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'scroll',
});

export const ContentArea = styled('div', {
  boxSizing: 'content-box',
  position: 'relative',
  width: 'max-content',
  height: 'max-content',
  padding: '20px 10px',
  background: '$background',
  borderRadius: '5px',
});

export const CloseBtn = styled('button', {
  position: 'absolute',
  top: '15px',
  right: '20px',
  border: 'none',
  fontSize: '$small',
  fontWeight: 'bold',
  color: '$textColorBlur',
  cursor: 'pointer',
  padding: '3px',
});

export const Title = styled('span', {
  fontSize: '$medium',
  fontWeight: 'bold',
  width: 'max-content',
  display: 'block',
  margin: '0 auto 20px',
});

export const Submit = styled('button', ButtonSubmit, {
  padding: '7px',
  marginTop: '20px',
});
