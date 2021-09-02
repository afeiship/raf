import fn from '../src';

jest.setTimeout(50 * 1000);

describe('api.basic', () => {
  test('normail single value case', (done) => {
    const timer = fn(() => {
      console.log('1s, task started.');
    }, 1000);

    setTimeout(() => {
      expect(typeof timer).toBe('number');
      done();
    }, 3000);
  });
});
