(function () {

  var global = global || this;

  global.requestAnimationFrame = (function () {
    return requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      function (callback) {
        global.setTimeout(callback, 1000 / 60);
      };
  })();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = requestAnimationFrame;
  }

}());
