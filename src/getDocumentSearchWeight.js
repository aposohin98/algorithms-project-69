import removeNonWordCharachers from './utils/removeNonWordCharachers.js';

const getDocumentSearchWeight = ({ text }, searchText) => {
  const textWords = text.split(' ').map(removeNonWordCharachers);
  const searchWords = searchText.split(' ');

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
