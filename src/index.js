import removeNonWordCharachers from './utils/removeNonWordCharachers.js';

const getSearchWordCount = (text, searchWord) => {
  const words = text.split(' ');

  let count = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const normalizedWord = removeNonWordCharachers(word);

    if (normalizedWord === searchWord) {
      count += 1;
    }
  }

  return count;
};

const search = (docs, searchWord) => {
  const result = [];

  let lastCount = -1;

  for (let i = 0; i < docs.length; i += 1) {
    const { id, text } = docs[i];

    const count = getSearchWordCount(text, searchWord);

    if (count === 0) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (count > lastCount) {
      result.unshift(id);
    } else {
      result.push(id);
    }

    lastCount = count;
  }

  return result;
};

export default search;
