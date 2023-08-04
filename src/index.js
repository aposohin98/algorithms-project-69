const search = (docs, searchWord) => docs.reduce((acc, { id, text }) => {
  const words = text.split(' ');

  if (words.includes(searchWord)) {
    acc.push(id);
  }

  return acc;
}, []);

export default search;
