import reversedIndex from '../reversedIndex.js';

describe('Тестируем функцию reversedIndex', () => {
  it('Тест кейс #1', () => {
    const docs = [
      { id: 'doc1', text: 'some text' },
      { id: 'doc2', text: 'some text too' },
    ];

    expect(reversedIndex(docs)).toEqual({
      some: ['doc1', 'doc2'],
      text: ['doc1', 'doc2'],
      too: ['doc2'],
    });
  });
});
