# raf-timeout
> Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/raf-timeout
```

## usage
```js
import rafTimeout from '@jswork/raf-timeout';

const timer = rafTimeout(() => {
  console.log('1s, task started.');
}, 1000);
```

## license
Code released under [the MIT license](https://github.com/afeiship/raf-timeout/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/raf-timeout
[version-url]: https://npmjs.org/package/@jswork/raf-timeout

[license-image]: https://img.shields.io/npm/l/@jswork/raf-timeout
[license-url]: https://github.com/afeiship/raf-timeout/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/raf-timeout
[size-url]: https://github.com/afeiship/raf-timeout/blob/master/dist/raf-timeout.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/raf-timeout
[download-url]: https://www.npmjs.com/package/@jswork/raf-timeout
