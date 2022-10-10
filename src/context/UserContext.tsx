import { AxiosApi } from 'src/services';
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
      }
      setUserFetched(true);
      setUserLoading(false);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, userLoading, userFetched }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (secret?: boolean, redirect?: string) => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.userFetched) {
      if (!context.user && secret) {
        router.push(redirect || '/');
      }
    }
  }, [context, redirect, router, secret]);

  return context;
};
