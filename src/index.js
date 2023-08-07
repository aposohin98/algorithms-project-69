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

const search = (docs, searchText) => {
  const result = [];

  let previousWeight = -1;

  for (let i = 0; i < docs.length; i += 1) {
    const document = docs[i];

    const weight = getDocumentSearchWeight(document, searchText);

    if (weight === 0) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const { id } = document;

    if (weight > previousWeight) {
      result.unshift(id);
    } else {
      result.push(id);
    }

    previousWeight = weight;
  }

  return result;
};

export default search;
