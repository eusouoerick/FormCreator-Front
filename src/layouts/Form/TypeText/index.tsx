import * as S from './styles';

const TypeText = ({ children }: { children: string }) => {
  return (
    <S.TextContainer>
      <p style={{ marginBottom: '30px' }}>{children}</p>
      <input type='text' placeholder='Responder' />
    </S.TextContainer>
  );
};

export default TypeText;
