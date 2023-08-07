import removeNonWordCharachers from './utils/removeNonWordCharachers.js';

const getDocumentSearchWeight = ({ text }, searchText) => {
  const textWords = text.split(' ').map(removeNonWordCharachers);
  const searchWords = searchText.split(' ');

  return searchWords.reduce((weight, searchWord) => {
    const searchWordWeight = textWords.reduce((wordWeight, textWord) => {
      if (textWord === searchWord) {
        return wordWeight + 1;
      }

      return wordWeight;
    }, 0);

    return weight + searchWordWeight;
  }, 0);
};

export default getDocumentSearchWeight;
