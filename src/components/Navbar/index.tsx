import Image from 'next/image';
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
          <S.UserArea style={{}}>
            <S.LoginButton focus={true}>Signin</S.LoginButton>
            <S.LoginButton>Signup</S.LoginButton>
          </S.UserArea>
        )}

        {user && (
          <S.UserArea>
            <S.UserTextInfo>
              <span>{user?.name}</span>
              <span className='id'>#{user?.id}</span>
            </S.UserTextInfo>
            <S.UserImage>
              <Image
                src='/user.png'
                layout='fill'
                objectPosition='bottom'
                objectFit='cover'
                alt=''
                height={50}
                width={50}
                quality={100}
              />
            </S.UserImage>
          </S.UserArea>
        )}
      </S.Container>
    </>
  );
};

export default Navbar;
