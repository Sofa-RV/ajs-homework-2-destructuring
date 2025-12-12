import { orderByProps } from '../src/index.js';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  };

  test('["name", "level"] + алфавит остальных', () => {
    expect(orderByProps(obj, ['name', 'level'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });

  test('пустой order = только алфавит', () => {
    expect(orderByProps(obj, [])).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]);
  });

  test('order с несуществующим ключом игнорируется', () => {
    expect(orderByProps(obj, ['xxx', 'name', 'level'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });
});
