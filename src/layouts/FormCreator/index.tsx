import { useFormCreator } from 'src/context';

import Navbar from 'src/components/Navbar';
import { CardContainer } from 'src/components/Form';
import HeaderForm from './Header';
import * as S from './styles';
import BtnAddQuestion from './BtnAddQuestion';
import BtnSubmit from './BtnSubmit';
import Question from './Question';
import LoadingPage from '../LoadingPage';
import FormResponse from './FormResponse';

const FormCreator = () => {
  const { data, loading, response } = useFormCreator();

  if (response) {
    return (
      <>
        <Navbar page='dashboard' />
        <FormResponse />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Navbar page='dashboard' />
        <LoadingPage />;
      </>
    );
  }

  return (
    <>
      <Navbar page='dashboard' />
      <CardContainer>
        <HeaderForm />

        {data.questions.map((item) => (
          <Question key={item.id} data={item} />
        ))}

        <S.DivButtons>
          <BtnAddQuestion />
          {!!data.questions.length && <BtnSubmit />}
        </S.DivButtons>
      </CardContainer>
    </>
  );
};

export default FormCreator;
