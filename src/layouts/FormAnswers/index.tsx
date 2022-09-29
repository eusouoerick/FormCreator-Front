import type { FormAnswers } from 'src/types';

import Navbar from 'src/components/Navbar';
import * as S from 'src/components/Form';
import Header from './Header';
import AnswerCard from './AnswerCard';

const AnswersLayout = ({ data }: { data: FormAnswers }) => {
  return (
    <>
      <Navbar page='answers' />
      <S.CardContainer>
        <Header answersLen={data.answers_length} correctedLen={0} />
        {data.users_answers.map((item) => (
          <AnswerCard key={item.id} data={item} average={data.average} />
        ))}
      </S.CardContainer>
    </>
  );
};

export default AnswersLayout;
