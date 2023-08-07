import removeNonWordCharachers from './utils/removeNonWordCharachers.js';

const reversedIndex = (documents) => {
  const result = {};

  for (let i = 0; i < documents.length; i += 1) {
    const { id, text } = documents[i];
    const words = text.split(' ').map(removeNonWordCharachers);

    for (let j = 0; j < words.length; j += 1) {
      const word = words[j];

      if (!result[word]) {
        result[word] = {};
      }

      result[word][id] = true;
    }
  }

  return Object.entries(result).reduce((acc, [key, value]) => {
    acc[key] = Object.keys(value);

    return acc;
  }, {});
};

export default reversedIndex;
