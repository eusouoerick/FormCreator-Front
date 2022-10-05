import { styled } from 'src/styles/stitches.config';
import { InputText } from 'src/components/Form';

export const TextAnswer = styled('div', InputText, {
  padding: '10px',
  height: 'max-content',
  fontSize: '$xSmall',
  marginBottom: '25px',
  textAlign: 'justify',
  position: 'relative',
});

export const DivButtons = styled('div', {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
});

export const ConfirmBtn = styled('button', {
  width: '110px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '5px',
  padding: '2px',
  fontSize: '$xSmall',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background .1s linear',

  variants: {
    color: {
      green: {
        background: '#4fbf0b',
        '&:hover': {
          background: '#47a90a',
        },
      },
      red: {
        background: '#df2a2a',
        '&:hover': {
          background: 'hsl(0deg 89% 35%);',
        },
      },
      blur: {
        background: 'grey',
        '&:hover': {
          background: 'grey',
        },
      },
    },
  },
});
