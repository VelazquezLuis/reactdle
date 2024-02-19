import axios from 'axios';
import { useQuery } from 'react-query';

const useFetch = (url) => {
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery('repoData', async () => {
    const response = await axios.get(url);
    return response.data;
  });

  return { data, loading, error };
};

export default useFetch;
