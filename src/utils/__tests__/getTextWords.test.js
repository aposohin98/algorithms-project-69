import getTextWords from '../getTextWords';

describe('Тестируем функцию getTextWords', () => {
  it('Тест кейс #1', () => {
    const text = 'Hi!\n\nWelcome to My Mystery Island Blog!';

    expect(getTextWords(text)).toEqual(['hi', 'welcome', 'to', 'my', 'mystery', 'island', 'blog']);
  });
});
