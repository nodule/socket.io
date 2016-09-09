module.exports = {
  name: "on",
  ns: "socket.io",
  description: "Creates an io socket server object",
  ports: {
    input: {
      io: {
        type: "function",
        title: "io socket server handle",
        description: "Expects a io socket server node.",
        readonly: true,
        required: true
      }
    },
    output: {
      socket: {
        type: "function",
        title: "io socket object"
      }
    }
  },
  fn: function on(input, $, output, state, done, cb, on) {
    var r = function() {
      $.io.sockets.on($.event, function onCallback(socket) {
        cb({
          socket: socket
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}