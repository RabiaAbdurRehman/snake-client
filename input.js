
let connection; //connection between your input module and the server.

// const handleKeyPress = function(event){
//     if(event.key === 1){
//        /*  // Replace `sendData` with the actual function name and 'Your message here' with the actual message
//     sendDataSay: Your message here");*/
//         connection.write("Done")}
//     if(event.key=== 2){
//         connection.write("why")
//     }
//     if(event.key=== 3){
//         connection.write("how")
//     }
// }

const handleUserInput = function(key) {
    let message1 = "why";
    let message2 = "why";
    let message3 = "how";
    if (key === '\u0003') {
        process.exit();
    }
    if (key === 'w' || key === 'W') {
        connection.write("Move: up");
    }
    if (key === 'a' || key === 'A') {
        connection.write("Move: left");
    }
    if (key === 's' || key === 'S') {
        connection.write("Move: down");
    }
    if (key === 'd' || key === 'D') {
        connection.write("Move: right");
    }
    if (key === '1') {
        // connection.write(message1);it wont work with connection.write.
       connection.write(`Say: ${message1}`); // why cant I just write "Done" or "Why"?
    }
    if (key === '2') {
        connection.write(`Say: ${message2}`);
    }
    if (key === '3') {
        connection.write(`Say: ${message3}`);
    }
};
const setupInput = function(conn) {
    connection = conn;//?
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);

    // document.addEventListener('keydown', handleKeyPress)

    //on: listening the input from the terminal. node defines certain events:
    //stdin is giving the program the access to stream of input.register (listen to something, telling node some kind of event)
    //an even handler(second argument is the handler like what do you want to do.).
    // stdout comes when we want to put some output for user to see something
    return stdin;
};


// Stores the active TCP connection object.

module.exports = {
    setupInput,

};
