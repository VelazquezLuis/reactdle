import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const useFetch = (url) => {
  const { loading, error, data } = useQuery('repoData', () =>
    fetch(url).then((res) => res.json())
  );

  // if (loading) {
  //   console.log(loading);
  // }

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [url]);

  return { data, loading, error };
};

export default useFetch;
