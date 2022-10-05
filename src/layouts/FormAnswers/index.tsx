import { useAnswersContext } from 'src/context/AnswersContext';

import Navbar from 'src/components/Navbar';
import * as S from 'src/components/Form';
import Header from './Header';
import AnswerCard from './AnswerCard';
import EmptyArrayMessage from './EmptyArrayMessage';

const AnswersLayout = () => {
  const { answersState } = useAnswersContext();

  return (
    <>
      <Navbar page='answers' />
      <S.CardContainer>
        <Header
          answersLen={answersState.answers_length}
          correctedLen={answersState.corrected_length}
        />

        {!answersState.users_answers.length && <EmptyArrayMessage />}

        {answersState.users_answers.map((item) => (
          <AnswerCard key={item.id} data={item} average={answersState.average} />
        ))}
      </S.CardContainer>
    </>
  );
};

export default AnswersLayout;
