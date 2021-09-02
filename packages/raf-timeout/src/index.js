// https://gist.github.com/joyrexus/7304146

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();

  var rafTimeout = (inFn, inDelay) => {
    const start = new Date().getTime();
    let handle;

    function loop() {
      const current = new Date().getTime();
      const delta = current - start;

      delta >= inDelay ? inFn.call() : (handle = global.requestAnimationFrame(loop));
    }

    handle = global.requestAnimationFrame(loop);

    return {
      destroy: () => {
        return global.cancelAnimationFrame(handle);
      }
    };
  };

  global.rafTimeout = rafTimeout;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = rafTimeout;
  }
})();
