import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserContext } from 'src/context';

import NavModal from './NavModal';
import ShareModal from '../ShareModal';
import * as S from './styles';

type TypesNavbar = {
  page?: 'questions' | 'answers' | 'dashboard' | 'creator' | 'edit';
  blockUser?: number;
};

const Navbar = ({ page, blockUser = 0 }: TypesNavbar) => {
  const [toggleNavModal, setToggleNavModal] = useState<boolean>(false);
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

          {(page === 'dashboard' || page === 'edit') && (
            <S.StyledLink href='/dashboard/edit-user' checked={page === 'edit'}>
              Edit user
            </S.StyledLink>
          )}

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
          <S.UserArea style={{ gap: '10px' }}>
            <S.LoginButton focus={true}>Signin</S.LoginButton>
            <S.LoginButton>Signup</S.LoginButton>
          </S.UserArea>
        )}

        {user && (
          <S.UserArea onClick={() => setToggleNavModal((state) => !state)}>
            {toggleNavModal && <NavModal closeModal={setToggleNavModal} />}
            <S.UserImage>
              <Image
                src='/user.png'
                layout='fixed'
                objectPosition='bottom'
                objectFit='cover'
                alt='user image'
                height={30}
                width={30}
                quality={100}
              />
            </S.UserImage>
            <S.UserName>{user?.name.split(' ')[0].substring(0, 15)}</S.UserName>
            <span className='material-icons' translate='no'>
              expand_more
            </span>
          </S.UserArea>
        )}
      </S.Container>
    </>
  );
};

export default Navbar;
