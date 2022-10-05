import axios from 'src/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CreateAnswer } from 'src/types';

const useFormBody = () => {
  const { query } = useRouter();
  const [formBody, setState] = useState<CreateAnswer[]>([]);
  const [blockForm, setBlockForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const setFormBody = (content: string, questionId: string) => {
    if (!blockForm) {
      setState((state) => {
        const copy = [...state];
        const quest = copy.find((item) => item.questionId == questionId);
        if (quest) {
          quest.content = content;
          return copy;
        }
        return [...state, { questionId, content }];
      });
    }
  };

  const sendForm = async () => {
    if (!blockForm) {
      setLoading(true);
      try {
        await axios.post(`forms/${query.slug}/answers`, { answers: formBody });
        setBlockForm(true);
        toast.success('the answers have been sent');
      } catch (error: any) {
        toast.error(error.response.data.message[0]);
      }
      setLoading(false);
    }
  };

  return { formBody, setFormBody, sendForm, loading, blockForm };
};

export default useFormBody;