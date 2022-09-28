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
  border: 'solid 1px #ededed',
  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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

  span: {
    fontSize: '$xSmall',
    fontWeight: 'bold',
    color: '$textColorGrey',
    fontStyle: 'italic',
    width: 'max-content',
  },
});

export const AlertMessage = styled('span', {
  fontSize: '$xSmall',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '$textColorGrey',
  margin: '0 auto',
  width: 'max-content',
  display: 'block',
});
