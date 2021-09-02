// https://gist.github.com/joyrexus/7304146

const rafInterval = (inFn, inDelay) => {
  let start = new Date().getTime();
  let handle;

  function loop() {
    const current = Date.now();
    const delta = current - start;

    if (delta >= inDelay) {
      inFn.call();
      start = new Date().getTime();
    }

    handle = global.requestAnimationFrame(loop);
  }

  handle = global.requestAnimationFrame(loop);
  return {
    destroy: () => {
      return global.cancelAnimationFrame(handle);
    }
  };
};

global.rafInterval = global.rafInterval || rafInterval;

export = rafInterval;
