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
    width: 'max-content',
    fontSize: '$small',
    position: 'relative',
    cursor: 'pointer',

    span: {
      marginLeft: '27px',
    },
  },

  // 'input[type="radio"]': {
  //   // display: 'none',
  // },
});

export const InputRadio = styled('button', {
  position: 'absolute',
  color: '$textColorBlur',
  top: '2px',
  width: '18px',
  height: '18px',
  borderRadius: '999px',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',
  cursor: 'pointer',

  variants: {
    checked: {
      true: {
        background: '$primary',
        borderColor: '$primary',
      },
    },
  },
});
