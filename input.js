let connection; //connection between your input module and the server.
const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w'){
        connection.write("Move: up");
      }
      if (key === 'a'){
        connection.write("Move: left");
      }
      if (key === 's'){
        connection.write("Move: down");
      }
      if (key === 'd'){
        connection.write("Move: right");
      }
}
const setupInput = function(conn){
    connection = conn;//?
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
//on: listening the input from the terminal. node defines certain events:
//stdin is giving the program the access to stream of input.register (listen to something, telling node some kind of event)
//an even handler(second argument is the handler like what do you want to do.).
// stdout comes when we want to put some output for user to see something
    return stdin;
}


// Stores the active TCP connection object.

module.exports = {
    setupInput,

};
