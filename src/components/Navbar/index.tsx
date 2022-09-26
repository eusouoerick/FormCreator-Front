import Link from 'next/link';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>LOGO</S.Logo>
      <S.Buttons>
        <S.StyledLink href='#' checked>
          Questions
        </S.StyledLink>
        <S.StyledLink href='#'>Answers</S.StyledLink>
      </S.Buttons>
      <S.UserArea>
        <span>Nome de usuário</span>
        <span className='id'>#ID</span>
      </S.UserArea>
    </S.Container>
  );
};

export default Navbar;
