import { format } from 'date-fns';
import type { UsersAnswers } from 'src/types';

import { FormCard } from 'src/components/Form';
import * as S from './syles';

type AnswerProps = {
  data: UsersAnswers;
  average: number | null;
};

const AnswerCard = ({ data, average }: AnswerProps) => {
  return (
    <FormCard>
      <S.InfoArea>
        <S.Info>
          <S.Text primary>{data.author.name}</S.Text>
          <S.Text>{data.author.email}</S.Text>
        </S.Info>
        <S.Info align='end'>
          {average ??
            (data.value === null ? (
              <S.Text style={{ fontStyle: 'italic' }}>Waiting for the review</S.Text>
            ) : (
              <S.Text
                style={{
                  fontStyle: 'italic',
                  color: data.value >= Number(average) ? 'green' : 'red',
                }}
              >
                Value {data.value}
              </S.Text>
            ))}
          <S.Text style={{ fontStyle: 'italic' }}>
            Date {format(new Date(data.createdAt), 'dd/MM/yyyy')}
          </S.Text>
        </S.Info>
      </S.InfoArea>
      <S.Button>See answers</S.Button>
    </FormCard>
  );
};

export default AnswerCard;
