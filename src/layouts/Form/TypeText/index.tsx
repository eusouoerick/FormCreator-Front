import { memo } from 'react';

import type { QuestionProps } from 'src/types';
import { InputText, FormCard } from 'src/components/Form';

const TypeText = ({ question, setFormBody }: QuestionProps) => {
  const changeValue = (value: string) => {
    setFormBody(value, question.id);
  };

  return (
    <FormCard>
      <p style={{ marginBottom: '30px' }}>{question.title}</p>
      <InputText
        placeholder='Responder'
        onChange={(e) => changeValue(e.target.value)}
      />
    </FormCard>
  );
};

export default memo(TypeText);
