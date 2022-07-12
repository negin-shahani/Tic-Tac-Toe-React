const http = require("http").createServer();
const io = require("socket.io")(http);

const port = 3000;

let users = []

//Listen for a client connection 
io.on("connection", (socket) => {
    //Socket is a Link to the Client 
    console.log("New Client is Connected!");
    
    socket.on('join', function (roomName, userName) {

        const admin = users.filter(user => (user.admin === true) && (user.room === roomName));

        if (admin.length > 0) {

        } else {
            // Admin
            users.push({
                'socketid': socket.id,
                'socket': socket,
                'userName': userName,
                'admin': true,
                'roomName': roomName,
            });

            socket.join(room);

            socket.emit('newJoin', socket.id);
        }
    });


});

//Listen the HTTP Server 
http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});