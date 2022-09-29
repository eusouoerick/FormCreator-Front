import { useState } from 'react';
import type { QuestionProps } from 'src/types';
import * as S from './styles';

const TypeRadio = ({ question, setFormBody }: QuestionProps) => {
  const [checked, setChecked] = useState<number>();

  const changeValue = (value: number) => {
    setChecked(value);
    setFormBody(question.inputs[value], question.id);
  };

  return (
    <S.RadioContainer>
      <p style={{ marginBottom: '30px' }}>{question.title}</p>
      <S.OptionsArea>
        {question.inputs?.map((value, i) => (
          <div key={`rq${question.id}:${i}`}>
            <S.InputRadio checked={checked === i} onClick={() => changeValue(i)} />
            <span>{value}</span>
          </div>
        ))}
      </S.OptionsArea>
    </S.RadioContainer>
  );
};

export default TypeRadio;
