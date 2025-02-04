import {server} from "socket.io";

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log("Socket already running");
    } else {
        const io = new server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
        console.log("server is connected");
    });
    }
}

export default SocketHandler;