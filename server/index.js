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

io.on('connect',(socket) =>{
    socket.on("Join",({name,room},callback)=>{
       
    })
})