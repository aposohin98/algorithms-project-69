import getDocumentSearchWeight from './utils/getDocumentSearchWeight.js';

function SearchEngine(docs) {
  if (!new.target) {
    return new SearchEngine(docs);
  }

  this.docs = docs;
}

SearchEngine.prototype.search = function search(searchText) {
  const result = [];

  let previousWeight = -1;

  for (let i = 0; i < this.docs.length; i += 1) {
    const document = this.docs[i];

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

export default SearchEngine;
