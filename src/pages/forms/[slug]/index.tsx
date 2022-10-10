import { useGetFormData } from 'src/hooks';
import type { Form } from 'src/types';

import FormByHash from 'src/layouts/Form';
import LoadingPage from 'src/layouts/LoadingPage';

const FormPage = () => {
  const { data, loading, error } = useGetFormData<Form>();

  if (loading) return <LoadingPage />;
  if (error) return <h1>{error}</h1>;
  return <FormByHash data={data} />;
};

export default FormPage;
