const express = require('express')
const app = express()
const port = 3000
const path = require('path')
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.use('/', express.static(path.join(__dirname, '../dist')))

let gameState = {
    rooms: {
        test1: {
            players: {}
        },
        test2: {
            players: {}
        },
        test3: {
            players: {}
        },
        test4: {
            players: {}
        },
        test5: {
            players: {}
        }
    }
}

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

io.on('connection', socket => {
    console.log('a user connected')
    socket.emit('yoo')
})

http.listen(port, () => console.log(`App listening on port ${port}!`))
