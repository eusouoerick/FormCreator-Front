import Navbar from 'src/components/Navbar';
import * as S from 'src/components/Form';
import TypeText from 'src/layouts/Form/TypeText';
import TypeRadio from './TypeRadio';
import ButtonSubmit from './ButtonSubmit';

const FormByHash = ({ data }: { data: any }) => {
  return (
    <>
      <Navbar />
      <S.CardContainer>
        <S.Title>
          <div className='texts'>
            <p className='title'>
              Titulo do formulario com algumas informaçoes Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus tenetur deleniti officiis.
            </p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita
              veniam nesciunt voluptates architecto facere harum odio? Ipsum aperiam,
              cum, impedit mollitia, aspernatur blanditiis sint harum autem modi saepe
              natus officia fuga. Officiis quam fugiat delectus molestiae perferendis
              doloremque neque, consequuntur saepe adipisci, veniam repellendus autem
              ea quis numquam. Molestias.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span className='date'>Válido até 01/12/2022</span>
          </div>
        </S.Title>
        <TypeText>
          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em
          latim utilizado na produção gráfica para preencher os espaços de texto em
          publicações para testar
        </TypeText>
        <TypeRadio>
          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em
          latim utilizado na produção gráfica para preencher os espaços de texto em
          publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo
          real.
        </TypeRadio>

        <ButtonSubmit />
      </S.CardContainer>
    </>
  );
};

export default FormByHash;
