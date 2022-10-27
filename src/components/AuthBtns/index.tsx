import { useState } from 'react';
import AuthModal from '../AuthModal';
import * as S from './styles';

const AuthBtns = ({ redirect }: { redirect?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<null | boolean>(null);

  const closeModal = () => {
    setIsModalOpen(null);
  };

  return (
    <>
      <S.AuthArea style={{ gap: '10px' }}>
        {typeof isModalOpen === 'boolean' && (
          <AuthModal page={isModalOpen} redirect={redirect} closeModal={closeModal} />
        )}
        <S.LoginButton focus={true} onClick={() => setIsModalOpen(false)}>
          Signin
        </S.LoginButton>
        <S.LoginButton onClick={() => setIsModalOpen(true)}>Signup</S.LoginButton>
      </S.AuthArea>
    </>
  );
};

export default AuthBtns;
