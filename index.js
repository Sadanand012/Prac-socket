const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const serv =  http.createServer(app);
const io = new Server(serv);

//socket io

io.on('connection', (socket) => {
// console.log("A new user has connected", socket.id);
socket.on('user-message', (message) => {
    // console.log("A new User message", message);
    io.emit('message',message);
})
})
//frontend file in public
app.use(express.static("./public"));
//url for geting 
app.get('/', (req, res) => {
    return res.sendFile("./public/index.html")
})
serv.listen(9000, () => console.log(`server runnig on port 9000`));