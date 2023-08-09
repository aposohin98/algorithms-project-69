import removeNonWordCharachers from './removeNonWordCharachers.js';

const getTextWords = (text) => {
  const normalizedText = text.trim().toLowerCase().replace(/\n/g, ' ');

  const words = normalizedText.split(' ');

  return words.reduce((acc, word) => {
    const normalizedWord = removeNonWordCharachers(word);

    if (normalizedWord) {
      acc.push(normalizedWord);
    }

    return acc;
  }, []);
};

export default getTextWords;
