import { useUserContext } from 'src/context';

import DashboardForms from 'src/layouts/Dashboard/Forms';
import LoadingPage from 'src/layouts/LoadingPage';

const DashboardPage = () => {
  const { userLoading } = useUserContext(true);

  if (userLoading) return <LoadingPage />;
  return <DashboardForms />;
};

export default DashboardPage;
