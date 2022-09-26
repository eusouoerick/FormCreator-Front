import { styled } from 'src/styles/stitches.config';
import { FormCard } from 'src/components/Form';

export const TextContainer = styled('div', FormCard, {
  fontSize: '$small',

  input: {
    fontSize: '$xSmall',
    width: '100%',
    height: '37px',
    padding: '0 10px',
    background: '$inputBackground',
    border: 'solid 1px $inputBorder',
    borderRadius: '5px',
  },
});
