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
    net,
    connect,


};