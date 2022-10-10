import { FormCreatorProvider } from 'src/context';
import FormCreator from 'src/layouts/FormCreator';

const CreatorPage = () => {
  return (
    <FormCreatorProvider>
      <FormCreator />
    </FormCreatorProvider>
  );
};

export default CreatorPage;
