module.exports = {
  name: "listen",
  ns: "socket.io",
  description: "Creates an io socket server object",
  dependencies: {
    npm: {
      "socket.io": "##socket.io##"
    }
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "HTTP server handle",
        description: "Expects a http or express server node object.",
        readonly: true,
        required: true
      }
    },
    output: {
      io: {
        type: "object",
        title: "io socket server object"
      }
    }
  },
  fn: function listen(input, $, output, state, done, cb, on, socket_io) {
    var r = function() {
      output = {
        io: socket_io.listen($.app)
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}