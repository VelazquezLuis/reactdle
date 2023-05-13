import useFetch from './api';

const GetWordleWord = () => {
  const {
    data: wordleWord,
    loading,
    error,
  } = useFetch('https://random-word-api.herokuapp.com/word?length=5');
  return { wordleWord, loading, error };
};

export default GetWordleWord;
