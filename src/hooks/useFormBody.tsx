import axios from 'src/api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CreateAnswer } from 'src/types';

const useFormBody = () => {
  const { query } = useRouter();
  const [formBody, setState] = useState<CreateAnswer[]>([]);
  const [blockForm, setBlockForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const setFormBody = (content: string, questionId: number) => {
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

  const sendForm = () => {
    if (!blockForm) {
      setLoading(true);
      axios
        .post(`forms/${query.slug}/answers`, { answers: formBody })
        .then(() => {
          setBlockForm(true);
          setLoading(false);
        })
        .catch(() => {
          setBlockForm(true);
          setLoading(false);
        });
    }
  };

  return { formBody, setFormBody, sendForm, loading, blockForm };
};

export default useFormBody;
