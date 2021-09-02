import fn from '../src';

jest.setTimeout(50 * 1000);

describe('api.basic', () => {
  test('normail single value case', (done) => {
    var res = fn(() => {
      console.log('interval...');
    }, 500);

    setTimeout(() => {
      console.log('done', res);
      done();
    }, 3 * 1000);
  });
});
