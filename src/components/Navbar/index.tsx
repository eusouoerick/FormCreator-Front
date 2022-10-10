import { useRouter } from 'next/router';
import * as S from './styles';

const Navbar = ({ page }: { page: 'questions' | 'answers' | 'dashboard' }) => {
  const { query } = useRouter();

  return (
    <S.Container>
      <S.Logo>LOGO</S.Logo>
      <S.Buttons>
        <S.StyledLink href={`/dashboard`}>Dashboard</S.StyledLink>
        <S.StyledLink href={`/forms/${query.slug}`} checked={page === 'questions'}>
          Questions
        </S.StyledLink>
        <S.StyledLink
          href={`/forms/${query.slug}/answers`}
          checked={page === 'answers'}
        >
          Answers
        </S.StyledLink>
      </S.Buttons>
      <S.UserArea>
        <span>Nome de usuário</span>
        <span className='id'>#ID</span>
      </S.UserArea>
    </S.Container>
  );
};

export default Navbar;
