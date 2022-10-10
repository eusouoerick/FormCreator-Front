import { AxiosApi, ThrowToastError } from 'src/services';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAnswersContext } from 'src/context/AnswersContext';
import toast from 'react-hot-toast';
import { CorrectAnswers } from 'src/types';

const useAnswersModal = (answerId: string) => {
  const { query } = useRouter();
  const { updateAnswer } = useAnswersContext();
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<CorrectAnswers>({
    user_answerId: answerId,
    answers: [],
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await AxiosApi.patch(`forms/${query.slug}/answers`, answers);
      updateAnswer(answers, data.value, data.increment);
      toast.success('Corrected answers');
    } catch (error: any) {
      ThrowToastError(error);
    }
    setLoading(false);
  };

  // tira o scroll do body para não quebrar o modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return {
    loading,
    handleSubmit,
    setAnswers,
  };
};

export default useAnswersModal;
