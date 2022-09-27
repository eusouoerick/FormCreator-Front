import { Question } from './form';

export type QuestionProps = {
  question: Question;
  setFormBody: (content: string, questionId: number) => void;
};
