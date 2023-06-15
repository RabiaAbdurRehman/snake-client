const net = require("net");

//Establish a connection.
const connect = function() {
    const conn = net.createConnection({
        host: "localhost",
        port: 50541
    });

    //Interpret the incoming data as a text.
    conn.setEncoding("utf8");

    //events:
    conn.on("data", (data) => {

        console.log(data);

    });

    return conn;

};
// exporting....
module.exports = {
    net,
    connect,


};