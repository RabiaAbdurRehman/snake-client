const net = require("net");//build in library in node.
const { IP, PORT } = require("./constants");
//Establish a connection.
const connect = function() {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });
    //Interpret the incoming data as a text.
    conn.setEncoding("utf8");
    //events:
    //keyword connect for user.
    conn.on("connect", (connects) => {
        console.log("connected.....");
        conn.write("Name: Rab");
    });
    //to get from server, we use keyword data.
    conn.on("data", (dataFromServer) => {
        console.log(dataFromServer);
    });
    return conn;
};
// exporting....
module.exports = {
    connect,
};