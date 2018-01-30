import Map from './Map';
import pipe from '../pipe';

describe('Map', () => {

  describe('new', () => {
    test('Map.new/1', () => {
      expect(typeof Map.new()).toEqual('object');
    });

    test('Map.new/2', () => {
      expect(Map.new([{ hello: 'world' }, { world: 'hello' }])).toEqual({
        hello: 'world',
        world: 'hello',
      });
    });

    test('Map.new/3', () => {
      const transformer = num => num * 2;
      expect(Map.new([{ two: 2 }, { five: 5 }], transformer)).toEqual({
        two: 4,
        five: 10,
      });
    });
  });

  describe('put', () => {
    test('Map.put/3', () => {
      const existingMap = Map.new([{ key: 'value' }]);
      expect(Map.put(existingMap, 'key2', 'value2')).toEqual({
        key: 'value',
        key2: 'value2',
      });
    });
  });

  describe('merge', () => {
    test('Map.merge/2', () => {
      expect(Map.merge({ hello: 'world' }, { world: 'hello' })).toEqual({
        hello: 'world',
        world: 'hello',
      });
    });
  });

  describe('keys', () => {
    test('Map.keys/1', () => {
      expect(Map.keys({ hello: 'world', world: 'hello' })).toEqual(['hello', 'world']);
    });
  });

  describe('all together now', () => {
    const putKey = map => Map.put(map, 'key', 'value');
    const otherMap = Map.new([{ hello: 'world' }]);
    const mergeMap = map => Map.merge(otherMap, map);
    const piper = pipe(Map.new, putKey, mergeMap);

    expect(piper()).toEqual({ hello: 'world', key: 'value' });
  });

});