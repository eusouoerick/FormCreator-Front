import type { Form } from 'src/types';

import { CardContainer } from 'src/components/Form';
import Navbar from 'src/components/Navbar';
import LoadingPage from 'src/layouts/LoadingPage';
import Pagination from 'src/components/Pagination';
import * as S from './styles';
import Card from './Card';
import usePagination from 'src/hooks/usePagination';

const DashboardForms = ({}) => {
  const { changePage, data, error, loading, removeItemById, page } = usePagination<
    Form[]
  >('/users/forms', undefined, 9);

  if (loading) {
    return (
      <>
        <Navbar page='dashboard' />
        <LoadingPage />;
      </>
    );
  }

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Navbar page='dashboard' />

      <CardContainer>
        <S.LinkToCreator href='/forms'>Criar formulario</S.LinkToCreator>

        <S.GridTemplate>
          {data!.map((item) => (
            <Card data={item} key={item.id} removeItemById={removeItemById} />
          ))}
        </S.GridTemplate>

        {page === 1 && data?.length === 9 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}

        {page !== 1 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}
      </CardContainer>
    </>
  );
};

export default DashboardForms;