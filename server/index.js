const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const Room = require('./gameRoundClasses/gameRoundClass')

const gameState = {
    rooms: {},
}

//Mock Data:

gameState.rooms['testRoom'] = new Room('testRoom', [
    'Foods',
    'Songs',
    'Countries',
])
gameState.rooms.testRoom.addPlayer('Muin', 123)
gameState.rooms.testRoom.addPlayer('Soud', 456)
gameState.rooms.testRoom.addPlayer('Mahir', 789)

gameState.rooms['anotherRoom'] = new Room('anotherRoom', [
    'Cartoons',
    'Artists',
    'Computer Science',
])
gameState.rooms.anotherRoom.addPlayer('MewMew', 123)
gameState.rooms.anotherRoom.addPlayer('Choyon', 456)
gameState.rooms.anotherRoom.addPlayer('Riham', 789)

//Helper functions

const getListOfRooms = () => Object.keys(gameState.rooms)
const getRoomCategories = roomName => gameState.rooms[roomName].categories
const getRoomPlayers = roomName => Object.keys(gameState.rooms[roomName].room)

io.on('connection', clientSocket => {
    console.log('A user connected...')
    console.log('The user id is: ', clientSocket.id)

    clientSocket.on('disconnect', () => {
        console.log(`User ${clientSocket.username} disconnected`)

        if (clientSocket.roomName !== undefined) {
            gameState.rooms[clientSocket.roomName].removePlayer(
                clientSocket.username
            )

            io.in(clientSocket.roomName).emit(
                'UPDATE_PLAYERS',
                getRoomPlayers(clientSocket.roomName)
            )

            const roomIsEmpty =
                Object.keys(gameState.rooms[clientSocket.roomName].room)
                    .length === 0

            if (roomIsEmpty) {
                delete gameState.rooms[clientSocket.roomName]
                clientSocket.broadcast.emit('UPDATE_ROOMS', getListOfRooms())
            }
        }
    })

    clientSocket.on('SET_SOCKET_USERNAME', username => {
        clientSocket.username = username
        console.log('Client username configured...')
        console.log('The clients username: ', clientSocket.username)
    })

    clientSocket.on('CREATE_GAME_ROOM', roomConfig => {
        console.log('A room was created. Here is the config: ', roomConfig)
        console.log('Creating new room...')

        const { roomName, categories } = roomConfig

        clientSocket.roomName = roomName
        clientSocket.join(roomName)

        gameState.rooms[roomName] = new Room(roomName, categories)
        console.log('Room was added, here is our game state now: ', gameState)

        gameState.rooms[roomName].addPlayer(
            clientSocket.username,
            clientSocket.id
        )

        console.log(
            'Player was added. Here is our roomState now: ',
            gameState.rooms[roomName]
        )

        clientSocket.broadcast.emit('UPDATE_ROOMS', getListOfRooms())
    })

    clientSocket.on('JOIN_GAME_ROOM', roomName => {
        console.log(`Player ${clientSocket.username} has joined the room. `)
        clientSocket.join(roomName)
        clientSocket.roomName = roomName
        // clientSocket.emit('ROOM_CATEGORIES', getRoomCategories(roomName))
        gameState.rooms[roomName].addPlayer(clientSocket.username)
        io.to(clientSocket.roomName).emit(
            'UPDATE_PLAYERS',
            getRoomPlayers(roomName)
        )
        console.log('Here is gameState: ', gameState.rooms)
        console.log(
            'Here is the ',
            roomName,
            ' room name in the game state: ',
            gameState.rooms[roomName]
        )
        console.log(
            'Here are the players in room [',
            roomName,
            ']:  ',
            Object.keys(gameState.rooms[roomName].room)
        )
    })

    clientSocket.on('GET_PLAYERS', roomName => {
        console.log(
            'Client has requested all players in the room. Here they are: ',
            getRoomPlayers(clientSocket.roomName)
        )
        io.in(roomName).emit(
            'UPDATE_PLAYERS',
            getRoomPlayers(clientSocket.roomName)
        )
    })

    clientSocket.on('GET_LIST_OF_ROOMS', () => {
        clientSocket.emit('LIST_OF_ROOMS', getListOfRooms())
    })
})

http.listen(port, () => console.log(`App listening on port ${port}!`))
