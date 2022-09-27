import type { QuestionProps } from 'src/types';
import * as S from './styles';

const TypeText = ({ question, setFormBody }: QuestionProps) => {
  //
  const changeValue = (value: string) => {
    setFormBody(value, question.id);
  };

  return (
    <S.TextContainer>
      <p style={{ marginBottom: '30px' }}>{question.title}</p>
      <input
        type='text'
        placeholder='Responder'
        onChange={(e) => changeValue(e.target.value)}
      />
    </S.TextContainer>
  );
};

export default TypeText;
