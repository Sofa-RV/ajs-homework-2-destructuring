import { expect, test } from '@jest/globals';
import { extractSpecial } from '../src/index.js';

describe('extractSpecial', () => {
  test('с description и без', () => {
    const character = {
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://double.png', description: 'двойной урон' },
        { id: 9, name: 'Нокаут', icon: 'http://stun.png' }
      ]
    };
    expect(extractSpecial(character)).toEqual([
      { id: 8, name: 'Двойной выстрел', icon: 'http://double.png', description: 'двойной урон' },
      { id: 9, name: 'Нокаут', icon: 'http://stun.png', description: 'Описание недоступно' }
    ]);
  });

  test('пустой special', () => {
    expect(extractSpecial({ special: [] })).toEqual([]);
  });

  test('нет special', () => {
    expect(extractSpecial({})).toEqual([]);
  });
});
