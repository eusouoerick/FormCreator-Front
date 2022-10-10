import { useEffect, useState } from 'react';
import { useFormCreator } from 'src/context';

const useFormResponse = () => {
  const { response } = useFormCreator();
  const [url, setUrl] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>();

  useEffect(() => {
    setUrl(process.env.NEXT_PUBLIC_BASE_URL + '/forms/' + response?.hash);
  }, [response]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 700);
  };

  return { url, copyToClipboard, showMessage };
};

export default useFormResponse;
