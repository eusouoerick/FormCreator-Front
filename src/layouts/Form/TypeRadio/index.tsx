import * as S from './styles';

const TypeRadio = ({ children }: { children: string }) => {
  return (
    <S.RadioContainer>
      <p style={{ marginBottom: '30px' }}>{children}</p>

      <S.OptionsArea>
        <label htmlFor='rq1'>
          <input id='rq1' type='radio' name='question1' value='data' />
          <S.InputRadio checked />
          <span>Valor 1</span>
        </label>
        <label htmlFor='rq2'>
          <input id='rq2' type='radio' name='question1' value='data' />
          <S.InputRadio />
          <span>
            em latim utilizado na produção gráfica para preencher os espaços de texto
            em publicações para testar
          </span>
        </label>
        <label htmlFor='rq2'>
          <input id='rq2' type='radio' name='question1' value='data' />
          <S.InputRadio />
          <span>Valor 2</span>
        </label>
      </S.OptionsArea>
    </S.RadioContainer>
  );
};

export default TypeRadio;
