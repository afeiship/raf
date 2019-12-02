(function() {
  var global =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    this ||
    {};

  global.requestAnimationFrame = (function() {
    return (
      requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      function(callback) {
        global.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = requestAnimationFrame;
  }
})();
