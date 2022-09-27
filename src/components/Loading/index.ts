import { styled } from 'src/styles/stitches.config';
import { Rotation } from 'src/styles/stitches.config';

const Loading = styled('span', {
  margin: '20px auto',
  width: '40px',
  height: '40px',
  borderRadius: '20px',
  display: 'block',
  borderTop: '3px solid $background',
  borderLeft: '3px solid $primary',
  boxSizing: 'border-box',
  animation: `${Rotation} 1s cubic-bezier(0.48, 0.67, 0.99, 0.24) infinite`,
});

export default Loading;
