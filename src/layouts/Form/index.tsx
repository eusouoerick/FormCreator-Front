import type { Form } from 'src/types';
import { format } from 'date-fns';
import useFormBody from './useFormBody';

import MetaTags from './MetaTags';
import Navbar from 'src/components/Navbar';
import * as S from 'src/components/Form';
import TypeText from 'src/layouts/Form/TypeText';
import TypeRadio from './TypeRadio';
import ButtonSubmit from '../../components/ButtonSubmit';
import Loading from 'src/components/Loading';

const FormByHash = ({ data }: { data: Form }) => {
  const { loading, blockForm, sendForm, setFormBody } = useFormBody();

  return (
    <>
      <MetaTags data={data} />

      <Navbar page='questions' blockUser={data.createdBy} />

      <S.CardContainer>
        <S.Title>
          <div className='texts'>
            <p className='title'>{data.title}</p>
            <p className='desc'>{data.desc}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>
              {data.date
                ? `Válido até ${format(new Date(data.date), 'dd/MM/yyyy')}`
                : 'Sem prazo de entrega'}
            </span>
            <span>Value : {data.value}</span>
          </div>
        </S.Title>

        {data.userBlocked ? (
          <S.AlertMessage>The user has already responded to the form...</S.AlertMessage>
        ) : (
          <>
            {data.questions?.map((item) =>
              item.type === 'text' ? (
                <TypeText key={item.id} question={item} setFormBody={setFormBody} />
              ) : (
                <TypeRadio key={item.id} question={item} setFormBody={setFormBody} />
              )
            )}

            {loading ? (
              <Loading />
            ) : (
              <ButtonSubmit onClick={sendForm} disabled={blockForm}>
                Submit
              </ButtonSubmit>
            )}
          </>
        )}
      </S.CardContainer>
    </>
  );
};

export default FormByHash;
