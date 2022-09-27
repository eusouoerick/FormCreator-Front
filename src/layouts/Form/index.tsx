import type { Form } from 'src/types';
import { format } from 'date-fns';
import useFormBody from 'src/hooks/useFormBody';

import Navbar from 'src/components/Navbar';
import * as S from 'src/components/Form';
import TypeText from 'src/layouts/Form/TypeText';
import TypeRadio from './TypeRadio';
import ButtonSubmit from './ButtonSubmit';
import Loading from 'src/components/Loading';

const FormByHash = ({ data }: { data: Form }) => {
  const { loading, blockForm, sendForm, setFormBody } = useFormBody();

  return (
    <>
      <Navbar page='questions' />
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
          <S.AlertMessage>
            The user has already responded to the form...
          </S.AlertMessage>
        ) : (
          <>
            {data.questions?.map((item) => {
              if (item.type === 'text') {
                return (
                  <TypeText key={item.id} question={item} setFormBody={setFormBody} />
                );
              } else if (item.type === 'select') {
                return (
                  <TypeRadio key={item.id} question={item} setFormBody={setFormBody} />
                );
              }
            })}

            {!loading ? (
              <ButtonSubmit onClick={sendForm} disabled={blockForm}>
                Submit
              </ButtonSubmit>
            ) : (
              <Loading />
            )}
          </>
        )}
      </S.CardContainer>
    </>
  );
};

export default FormByHash;
