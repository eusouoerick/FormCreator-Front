import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Container = styled('div', {
  background: '$bgWhite',
  height: '75px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  borderBottom: '$border',

  alignItems: 'center',
});

export const Logo = styled('span', {
  color: '$primary',
  fontSize: '$big',
  fontWeight: 'bold',
  position: 'absolute',
  left: '40px',
  letterSpacing: '0.105em',
});

export const Buttons = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
});

export const StyledLink = styled('a', Link, {
  padding: '0 0 5px',
  fontSize: '$xSmall',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '$textColor',
  transition: 'border-color .1s linear',
  borderBottom: 'solid 2px transparent',

  '&:hover': {
    borderColor: '#dfdfdf',
  },

  variants: {
    checked: {
      true: {
        borderColor: '$primary',
        '&:hover': {
          borderColor: '$primary',
        },
      },
    },
  },
});

export const UserArea = styled('div', {
  fontSize: '$xSmall',
  minWidth: '150px',
  height: '100%',
  position: 'absolute',
  right: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gap: '5px',

  span: {
    fontWeight: 'bold',
  },
  'span.id': {
    color: '#7C7C7C',
    fontSize: '14px',
    fontStyle: 'italic',
  },
});
