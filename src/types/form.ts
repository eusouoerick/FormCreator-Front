export type Form = {
  id: number;
  userBlocked: boolean;
  createdAt: string;
  updateAt: string;
  title: string;
  desc?: string;
  createdBy: number;
  date?: string;
  hash: string;
  average: number | null;
  answers_length: number;
  questions_length: number;
  value: number;
  questions?: Question[];
  users_answers?: UsersAnswers[];
};

export type Question = {
  id: number;
  formId: number;
  type: string;
  title: string;
  inputs: string[];
  value: number;
};

export type UsersAnswers = {
  id: number;
  createdAt: string;
  updateAt: string;
  createdBy: number;
  formId: number;
  value: number | null;
  answers: Answers[];
  author: {
    name: string;
    email: string;
  };
};

export type Answers = {
  id: number;
  createdAt: string;
  user_answerId: number;
  questionId: number;
  content: string;
  isCorrect?: boolean;
};
