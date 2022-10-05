import { useContext, createContext, ReactNode, useState } from 'react';
import type { CorrectAnswers, FormAnswers } from 'src/types';

type TypesAnswersContext = {
  answersState: FormAnswers;
  updateAnswer: (dto: CorrectAnswers, value: number, increment: boolean) => void;
};

export const AnswersContext = createContext({} as TypesAnswersContext);

type Props = {
  children: ReactNode;
  data: FormAnswers;
};

export const AnswersProvider = ({ data, children }: Props) => {
  const [answersState, setState] = useState(data);

  const updateAnswer = (dto: CorrectAnswers, value: number, increment: boolean) => {
    setState((state) => {
      const newState = { ...state };
      const answerById = state.users_answers.find(
        (item) => item.id === dto.user_answerId
      );

      if (answerById) {
        answerById.value = value;
        answerById.answers = answerById.answers.map((item) => {
          const findUpdate = dto.answers.find((i) => i.id === item.id);
          if (findUpdate) {
            item.isCorrect = findUpdate.isCorrect;
          }
          return item;
        });
      }

      if (increment) {
        newState.corrected_length = newState.corrected_length + 1;
      }
      return newState;
    });
  };

  return (
    <AnswersContext.Provider value={{ answersState, updateAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

export const useAnswersContext = () => useContext(AnswersContext);
