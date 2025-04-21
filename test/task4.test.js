const { sayHi, hiIn } = require('../tasks/task4.js');

describe('sayHi', () => {
  it('should return English greeting by default', () => {
    expect(sayHi('Naida')).toBe('Hi Naida!');
    expect(sayHi('Alex', 'English')).toBe('Hi Alex!');
  });

  it('should return Spanish greeting', () => {
    expect(sayHi('Carlos', 'Spanish')).toBe('Hola Carlos!');
  });

  it('should return French greeting', () => {
    expect(sayHi('Nina', 'French')).toBe('Salut Nina!');
  });

  it('should fall back to English for unknown languages', () => {
    expect(sayHi('Zara', 'German')).toBe('Hi Zara!');
  });
});

describe('hiIn', () => {
  it('should return a function when language is fixed', () => {
    const inFrench = hiIn('French');
    expect(typeof inFrench).toBe('function');
  });

  it('should apply language correctly when name is provided', () => {
    const inSpanish = hiIn('Spanish');
    expect(inSpanish('Luis')).toBe('Hola Luis!');

    const inFrench = hiIn('French');
    expect(inFrench('Marie')).toBe('Salut Marie!');
  });

  it('should use default English greeting if language is not recognized', () => {
    const inUnknown = hiIn('Klingon');
    expect(inUnknown('Spock')).toBe('Hi Spock!');
  });
});