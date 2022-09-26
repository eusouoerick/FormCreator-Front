import { styled } from 'src/styles/stitches.config';
import { FormCard } from 'src/components/Form';

export const RadioContainer = styled('div', FormCard, {
  p: {
    fontSize: '$small',
  },
});

export const OptionsArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  padding: '0 10px',

  label: {
    fontSize: '$small',
    position: 'relative',
    display: 'inline-flex',
    cursor: 'pointer',

    span: {
      marginLeft: '27px',
    },
  },

  'input[type="radio"]': {
    display: 'none',
  },
});

export const InputRadio = styled('button', {
  position: 'absolute',
  top: '2px',
  width: '18px',
  height: '18px',
  borderRadius: '999px',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',

  variants: {
    checked: {
      true: {
        background: '$primary',
        borderColor: '$primary',
      },
    },
  },
});
