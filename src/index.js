import removeNonWordCharachers from './utils/removeNonWordCharachers.js';

const search = (docs, searchWord) => docs.reduce((acc, { id, text }) => {
  const words = text.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const normalizedWord = removeNonWordCharachers(word);

    if (normalizedWord === searchWord) {
      acc.push(id);
      break;
    }
  }

  return acc;
}, []);

export default search;
