import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useUserContext } from 'src/context';

const useNavModal = (closeModal: (cb: boolean) => void) => {
  const modalRef = useRef(null);
  const { setUser } = useUserContext({ secret: true });
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('ACS_TOKEN');
    setUser(undefined);
    router.push('/');
  };

  useEffect(() => {
    const checkClick = (e: any) => {
      if (modalRef.current) {
        //@ts-ignore - type never
        if (!modalRef.current.contains(e.target)) {
          closeModal(false);
        }
      }
    };
    document.addEventListener('mousedown', checkClick);
    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [closeModal]);

  return { modalRef, handleLogout };
};

export default useNavModal;
