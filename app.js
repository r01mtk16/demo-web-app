const http = require('http') // this is the library required to start a server
const fs = require('fs')
const port = 3000  // this is the port to listen to the server



//create our server

const server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile('index.html', function(error, data){
		if(error){
			res.writeHead(400)
			res.write('Error: File Not Found')
		}else{
			res.write(data)
		}
		res.end()
	})
	

})

server.listen(port, function(error){
	if (error){
		console.log('Something went wrong', error)
}else{
	console.log('Server is listening on port: ' + port )
	}
})