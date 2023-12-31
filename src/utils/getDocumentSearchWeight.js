import getTextWords from './getTextWords.js';

const getDocumentSearchWeight = ({ text }, searchText) => {
  const textWords = getTextWords(text);
  const searchWords = getTextWords(searchText);

  return searchWords.reduce((weight, searchWord) => {
    const searchWordCount = textWords.reduce((wordCount, textWord) => {
      if (textWord === searchWord) {
        return wordCount + 1;
      }

      return wordCount;
    }, 0);

    const searchWordWeight = searchWordCount / (textWords.length - searchWordCount);

    return weight + searchWordWeight;
  }, 0);
};

export default getDocumentSearchWeight;
