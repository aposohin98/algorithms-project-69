import removeNonWordCharachers from '../removeNonWordCharachers.js';

describe('Тестируем утилиту removeNonWordCharachers', () => {
  it('Удаляет знаки препинания', () => {
    expect(removeNonWordCharachers('word!')).toBe('word');
  });
});
