import Link from 'next/link';
import { styled } from 'src/styles/stitches.config';

export const GridTemplate = styled('div', {
  width: '790px',
  marginTop: '10px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 250px))',
  gridAutoRows: 'minmax(290px, 290px)',
  gap: '20px',

  '@tablet': {
    width: '100vw',
  },
});

export const LinkToCreator = styled('a', Link, {
  padding: '6px 10px',
  background: '$bgWhite',
  border: '$border',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
  gap: '5px',

  '&:hover': {
    borderColor: '$primary',
    color: '$primary',
  },
});
