import search from '../index.js';

describe('Тестируем функцию поиска', () => {
  it('Возвращает пустой массив если не было найдено не одного результата', () => {
    const docs = [];

    expect(search(docs, 'shoot')).toEqual([]);
  });

  it('Ранжирует результаты', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
  });

  it('Нечеткий поиск', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot at me')).toEqual(['doc2', 'doc1']);
  });
});
