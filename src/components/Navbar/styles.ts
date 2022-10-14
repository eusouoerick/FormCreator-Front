import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Container = styled('div', {
  background: '$bgWhite',
  height: '70px',
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
  gap: '30px',
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
  minWidth: 'max-content',
  height: '100%',
  position: 'absolute',
  right: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
});

export const UserTextInfo = styled('div', {
  fontWeight: 'bold',
  fontSize: '$small',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '5px',

  'span.id': {
    color: '#7C7C7C',
    fontSize: '$xSmall',
    fontStyle: 'italic',
  },
});

export const UserImage = styled('div', {
  width: '50px',
  height: '50px',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
});

export const LoginButton = styled('button', {
  padding: ' 5px 8px',
  border: 'none',
  borderRadius: '5px',
  background: 'transparent',
  fontSize: '$xSmall',
  cursor: 'pointer',

  variants: {
    focus: {
      true: {
        border: 'solid 1px $primary',
        color: '$primary',
      },
    },
  },
});
