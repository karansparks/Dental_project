// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
// const cors = require("cors");

// const app = express();
// const port = 4200; // Change to 3000 to avoid conflict with Angular

// // Enable CORS for all requests
// app.use(cors());

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: { origin: "*" }, // Allow all origins for testing
// });

// // Socket.IO Connection
// io.on("connection", (socket) => {
//   console.log("New client connected:", socket.id);

//   socket.on("message", (data) => {
//     console.log("Received message:", data);
//     io.emit("message", data); // Broadcasting message to all clients
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected:", socket.id);
//   });
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const {v4: uuid} = require('uuid');

const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const socketIO = new Server(server,{
  cors:{
    origin:'http://localhost:4200',

  }
});

let totdoList=[];

const todolistNamespace =  socketIO.of('/todo');
todolistNamespace.on('connnection',(socket)=>{
  console.log('new connectin established');
  socket.emit('update',totdoList);
  socket.on('newItem',(item)=>{
    const totdoItem = {id:uuid(),value:item};
    totdoList.push(totdoItem);
    todolistNamespace.emit('update',totdoList);


    socket.on('updateItem',(updatedItem)=>{
      const index = totdoList.findIndex((item)=>item.id === updatedItem.id);
      if(index !==-1){
        totdoList[index].value = updatedItem.value;
        todolistNamespace.emit('update',totdoList);
      }
    })

    socket.on('deleteItem',(updatedItem)=>{
      totdoList = totdoList.filter((item)=>item.id != updatedItem);
      todolistNamespace.emit('update',totdoList);
    })

    socket.on('disconnect',()=>{
      console.log('connection closed');
    })
  })
})


server.listen(3000,()=>{
  console.log('server is running');
})



