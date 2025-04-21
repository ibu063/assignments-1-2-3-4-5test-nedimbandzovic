const process = require('../tasks/task5.js');

describe('process pipeline', () => {
  const input = [3, 7, 8, 10, 15];

  it('should return the correct average after processing the array', () => {
    const result = process(input);
    expect(result).toBe(10.5);
  });

  it('should log all intermediate steps using tap', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    process(input);

    expect(logSpy).toHaveBeenCalledWith('Divisible by 5:', [10, 15]);
    expect(logSpy).toHaveBeenCalledWith('After subtracting 2:', [8, 13]);
    expect(logSpy).toHaveBeenCalledWith('Average:', 10.5);

    logSpy.mockRestore();
  });
});