const rafTimeout = (inFn, inDelay) => {
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

global.rafTimeout = global.rafTimeout || rafTimeout;

export = rafTimeout;
