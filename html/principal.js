let socket =io.connect('/')

socket.on('mensajes',(mensajes)=>{
	console.log(mensajes)
})
