import axios from 'src/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { FormAnswers } from 'src/types';

import AnswersLayout from 'src/layouts/FormAnswers';

const FormAnswersPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<FormAnswers | any>({});

  useEffect(() => {
    if (query.slug) {
      axios.get(`forms/${query.slug}/answers`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [query.slug]);

  if (loading) return <h1>Carregando</h1>;
  return <AnswersLayout data={data} />;
};

export default FormAnswersPage;
