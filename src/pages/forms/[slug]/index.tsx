import axios from 'src/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { Form } from 'src/types';

import FormByHash from 'src/layouts/Form';

const FormPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Form | any>({});

  useEffect(() => {
    if (query.slug) {
      axios.get(`forms/${query.slug}?questions=true`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [query.slug]);

  if (loading) return <h1>Carregando</h1>;
  return <FormByHash data={data} />;
};

export default FormPage;
