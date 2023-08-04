import search from '../index.js';

describe('Тестируем четкий поиск', () => {
  it('Тест кейс #1', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot')).toEqual(['doc1', 'doc2']);
  });

  it('Тест кейс #2', () => {
    const docs = [];

    expect(search(docs, 'shoot')).toEqual([]);
  });
});
