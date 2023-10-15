import useFetch from './api';

const GetWordleWord = () => {
  const {
    data: wordleWordDB,
    loading,
    error,
  } = useFetch('https://api.datamuse.com/words?sp=?????');

  return { wordleWordDB, loading, error };
};

export default GetWordleWord;
