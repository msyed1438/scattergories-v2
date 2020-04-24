const express = require('express')
const app = express()
const port = 3000
const path = require('path')
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

io.on('connection', socket => {
    console.log('a user connected')
    socket.emit('yoo')
})

http.listen(port, () => console.log(`App listening on port ${port}!`))
