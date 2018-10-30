//let ,var  y const
const express =require("express")
const app=express()
const server = require('http').Server(app)
const io=require(socket.js)(server)

app.use(express.static('html'))

server.listen(3000,()=>{
console.log("servidor iniciado...")
})

let mensajes=[
{
	author:"man",
	text:"hola que tal"
},
{
	author:"man",
	text:"hola que tal"
},
]

io.on('connection',(socket)=>{
	console.log("hay un cliente conectado")
    socket.emit("mensajes",mensajes)
})
