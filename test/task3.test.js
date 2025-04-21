// Modification of this file is prohibited and will result in getting 0 points from the assignment.
const extractNames = require('../tasks/task3');

describe('extractNames', () => {
  it('should extract names from an array of people objects', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 40 }
    ];
    const expected = ['Alice', 'Bob', 'Charlie'];
    expect(extractNames(input)).toEqual(expected);
  });

  it('should return an empty array when given an empty array', () => {
    expect(extractNames([])).toEqual([]);
  });

  it('should work with objects that only have the name property', () => {
    const input = [{ name: 'Dave' }, { name: 'Eva' }];
    expect(extractNames(input)).toEqual(['Dave', 'Eva']);
  });

  it('should return undefined for objects without a name property', () => {
    const input = [{ age: 22 }, { name: 'Fiona' }];
    expect(extractNames(input)).toEqual([undefined, 'Fiona']);
  });

  it('should use Array.prototype.map to ensure declarative approach', () => {
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    extractNames([{ name: 'George' }]);
    expect(mapSpy).toHaveBeenCalled();
    mapSpy.mockRestore();
  });
});