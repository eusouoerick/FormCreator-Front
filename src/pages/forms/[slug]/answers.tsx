import { useGetFormData } from 'src/hooks';
import type { FormAnswers } from 'src/types';

import { AnswersProvider, useUserContext } from 'src/context';
import AnswersLayout from 'src/layouts/FormAnswers';
import LoadingPage from 'src/layouts/LoadingPage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FormAnswersPage = () => {
  const router = useRouter();
  const { data, loading, error } = useGetFormData<FormAnswers>(true);
  const { userLoading, user } = useUserContext({
    secret: true,
    createdBy: data.createdBy,
  });

  useEffect(() => {
    if (error) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [error, router, user]);

  if (loading || userLoading) return <LoadingPage />;
  if (error) return <LoadingPage />;
  return (
    <AnswersProvider data={data}>
      <AnswersLayout />
    </AnswersProvider>
  );
};

export default FormAnswersPage;
