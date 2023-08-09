import SearchEngine from './searchEngine.js';

const app = (docs, searchText) => {
  const engine = new SearchEngine(docs);

  return engine.search(searchText);
};

export default app;
