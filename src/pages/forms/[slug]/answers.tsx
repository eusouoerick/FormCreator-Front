import useGetFormData from 'src/hooks/useGetFormData';
import type { FormAnswers } from 'src/types';

import { AnswersProvider } from 'src/context/AnswersContext';
import AnswersLayout from 'src/layouts/FormAnswers';
import LoadingPage from 'src/layouts/LoadingPage';

const FormAnswersPage = () => {
  const { data, loading, error } = useGetFormData<FormAnswers>(true);

  if (loading) return <LoadingPage />;
  if (error) return <h1>{error}</h1>;
  return (
    <AnswersProvider data={data}>
      <AnswersLayout />
    </AnswersProvider>
  );
};

export default FormAnswersPage;
