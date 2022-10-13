import Link from 'next/link';
import { styled } from 'src/styles/stitches.config';

export const GridTemplate = styled('div', {
  width: '790px',
  marginTop: '20px',
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 250px))',
  gridAutoRows: 'minmax(290px, 290px)',
  gap: '20px',

  '@tablet': {
    width: '100vw',
  },
});

export const LinkToCreator = styled('a', Link, {
  padding: '8px 10px',
  background: '$bgWhite',
  border: '$border',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',

  '&:hover': {
    borderColor: '$primary',
    color: '$primary',
  },
});
