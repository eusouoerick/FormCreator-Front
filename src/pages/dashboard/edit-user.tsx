import { useUserContext } from 'src/context';

import EditUser from 'src/layouts/Dashboard/EditUser';
import LoadingPage from 'src/layouts/LoadingPage';

const EditUserPage = () => {
  const { userLoading } = useUserContext({ secret: true });

  if (userLoading) return <LoadingPage />;
  return <EditUser />;
};

export default EditUserPage;
