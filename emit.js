module.exports = {
  name: "emit",
  ns: "socket.io",
  description: "Creates an io socket server object",
  ports: {
    input: {
      socket: {
        type: "function",
        title: "io socket handle",
        description: "Expects an socket.io socket node.",
        readonly: true,
        required: true
      },
      message: {
        type: "any",
        title: "A message to send",
        required: true
      },
      who: {
        type: "object",
        title: "Who should receive this?",
        description: "an object describing who should receive this message"
      },
      "volatile": {
        type: "boolean",
        title: "Volatitle",
        "default": false,
        description: "Sometimes certain messages can be dropped. Let's say you have an app that shows realtime tweets for the keyword `bieber`.  If a certain client is not ready to receive messages (because of network slowness or other issues, or because he's connected through long polling and is in the middle of a request-response cycle), if he doesn't receive ALL the tweets related to bieber your application won't suffer."
      }
    },
    output: {}
  },
  fn: function emit(input, $, output, state, done, cb, on) {
    var r = function() {
      $.socket.emit($.name, $.data)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}