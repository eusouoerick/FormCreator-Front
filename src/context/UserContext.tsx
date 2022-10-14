import { AxiosApi, ThrowToastError } from 'src/services';
import { useRouter } from 'next/router';
import { useState, createContext, useEffect, useContext } from 'react';

type User = {
  id: number;
  createdAt: string;
  updateAt: string;
  adm: boolean;
  email: string;
  name: string;
};

type TypeUserContext = {
  user: User | undefined;
  userLoading: boolean;
  userFetched: boolean;
};

export const UserContext = createContext({} as TypeUserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const [userFetched, setUserFetched] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await AxiosApi.get('users');
        setUser(data);
      } catch (error) {
        console.error(error);
        ThrowToastError(error);
      }
      setUserLoading(false);
      setUserFetched(true);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, userLoading, userFetched }}>
      {children}
    </UserContext.Provider>
  );
};

type HookProps = {
  secret?: boolean;
  createdBy?: number;
  redirect?: string;
};

export const useUserContext = ({ secret, redirect, createdBy }: HookProps) => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.userFetched) {
      const checkUser = createdBy && createdBy !== context.user?.id;
      if ((!context.user && secret) || checkUser) {
        router.push(redirect || '/');
      }
    }
  }, [context, createdBy, redirect, router, secret]);

  return context;
};
