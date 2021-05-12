const http = require('http');
const express = require('express');
const socketio = require('socketio');
const router = require('./router')
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const {addUsers,removeUsers,getUsers,getusersinroom}= require('./users')
app.use(cors());
app.use(router)

//server side api

io.on('connect',(socket) =>{
    socket.on("Join",({name,room},callback)=>{
       const {error,user}=addUsers({id:socket.id,name,room})
       if(error) return callback(error)
       socket.join(user.room)
       socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined!`});

       io.to(user.room).emit('roomData',{room:user.room,users:getusersinroom(user.room)})
       callback()      

    })
    socket.on('sendMessage',(message,callback)=>{
    const user =getUser(socke.id)
    io.to(user.room).emit('message',{user:user.name,text:message})
    callback()
    })
})