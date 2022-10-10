import { FormCreatorProvider, useUserContext } from 'src/context';

import FormCreator from 'src/layouts/FormCreator';
import LoadingPage from 'src/layouts/LoadingPage';

const CreatorPage = () => {
  const { userLoading } = useUserContext(true);

  if (userLoading) return <LoadingPage />;
  return (
    <FormCreatorProvider>
      <FormCreator />
    </FormCreatorProvider>
  );
};

export default CreatorPage;
