import { styled } from 'src/styles/stitches.config';

export const CardContainer = styled('div', {
  width: 'max-content',
  margin: '25px auto ',
});

export const FormCard = styled('div', {
  width: '43.75rem',
  minHeight: '6.25rem',
  height: 'max-content',
  background: '$bgWhite',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '$border',
  padding: '20px',
  position: 'relative',
});

export const Title = styled('div', FormCard, {
  'div.texts': {
    marginBottom: '20px',
  },

  'p.title': {
    fontSize: '$medium',
    fontWeight: 'bold',
    marginBottom: '10px',
  },

  'p.desc': {
    fontSize: '$small',
    color: '$textColorBlur',
  },

  '.date': {
    fontSize: '$xSmall',
    fontWeight: 'bold',
    color: '$textColorBlur',
    fontStyle: 'italic',
    width: 'max-content',
  },

  variants: {
    creator: {
      true: {},
    },
  },
});

