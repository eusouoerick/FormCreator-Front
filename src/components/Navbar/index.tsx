import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserContext } from 'src/context';
import ShareModal from '../ShareModal';
import * as S from './styles';

type TypesNavbar = {
  page?: 'questions' | 'answers' | 'dashboard' | 'creator';
  blockUser?: number;
};

const Navbar = ({ page, blockUser = 0 }: TypesNavbar) => {
  const [shareModal, setShareModal] = useState(false);
  const { user } = useUserContext({});
  const { query } = useRouter();

  return (
    <>
      {shareModal && <ShareModal closeModal={setShareModal} slug={String(query.slug)} />}

      <S.Container>
        <S.Logo>LOGO</S.Logo>

        <S.Buttons>
          <S.StyledLink href='/dashboard' checked={page === 'dashboard'}>
            Dashboard
          </S.StyledLink>
          {query.slug && (
            <>
              <S.StyledLink href={`/forms/${query.slug}`} checked={page === 'questions'}>
                Questions
              </S.StyledLink>

              {blockUser === user?.id && (
                <S.StyledLink
                  href={`/forms/${query.slug}/answers`}
                  checked={page === 'answers'}
                >
                  Answers
                </S.StyledLink>
              )}

              <S.StyledLink onClick={() => setShareModal(true)}>Share</S.StyledLink>
            </>
          )}
        </S.Buttons>

        {!user && (
          <S.UserArea
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              minWidth: 'max-content',
            }}
          >
            <S.LoginButton focus={true}>Signin</S.LoginButton>
            <S.LoginButton>Signup</S.LoginButton>
          </S.UserArea>
        )}

        {user && (
          <S.UserArea>
            <span>{user?.name}</span>
            <span className='id'>#{user?.id}</span>
          </S.UserArea>
        )}
      </S.Container>
    </>
  );
};

export default Navbar;
