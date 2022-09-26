import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import FormByHash from 'src/layouts/Form';

const config = {
  headers: {
    Authorization: 'Bearer ' + String(process.env.NEXT_PUBLIC_TOKEN_TEST),
  },
};

const FormPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (query.slug) {
      axios
        .get(
          String(process.env.NEXT_PUBLIC_API_URL) +
            `forms/${query.slug}?questions=true`,
          config
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
  }, [query.slug]);

  if (loading) return <h1>Carregando</h1>;
  return <FormByHash data={data} />;
};

export default FormPage;
