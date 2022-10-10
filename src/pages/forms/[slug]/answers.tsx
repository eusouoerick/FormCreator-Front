import { useGetFormData } from 'src/hooks';
import type { FormAnswers } from 'src/types';

import { AnswersProvider, useUserContext } from 'src/context';
import AnswersLayout from 'src/layouts/FormAnswers';
import LoadingPage from 'src/layouts/LoadingPage';

const FormAnswersPage = () => {
  const { userLoading } = useUserContext(true);
  const { data, loading, error } = useGetFormData<FormAnswers>(true);

  if (loading || userLoading) return <LoadingPage />;
  if (error) return <h1>{error}</h1>;
  return (
    <AnswersProvider data={data}>
      <AnswersLayout />
    </AnswersProvider>
  );
};

export default FormAnswersPage;
