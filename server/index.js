const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const Room = require('./gameRoundClasses/gameRoundClass')

const gameState = {
    rooms: {
        // room1: {
        //     //<--This key is generated by user
        //     lettersNotPlayedSoFar: ['a', 'b', 'c'],
        //     players: {
        //         muin: {
        //             //<--This key is generated by user
        //             socketId: '<   socket.id stored here   >',
        //             wordsPlayed: [
        //                 ['apple', 'august', 'Applebees'],
        //                 ['beef', 'Ben', 'Baskin Robbins'],
        //             ],
        //             points: 17,
        //         },
        //     },
        //     currentWordsInRound: {
        //         muin: ['catfish', 'Charles Boyle', 'Carvel'],
        //     },
        // },
    },
}


//Mock Data:

gameState.rooms['testRoom'] = new Room('testRoom', ['Foods', 'Songs', 'Countries'])
gameState.rooms.testRoom.addPlayer('Muin', 123)
gameState.rooms.testRoom.addPlayer('Soud', 456)
gameState.rooms.testRoom.addPlayer('Mahir', 789)

gameState.rooms['anotherRoom'] = new Room('anotherRoom', ['Cartoons', 'Artists', 'Computer Science'])
gameState.rooms.anotherRoom.addPlayer('MewMew', 123)
gameState.rooms.anotherRoom.addPlayer('Choyon', 456)
gameState.rooms.anotherRoom.addPlayer('Riham', 789)



const getListOfRooms = () => Object.keys(gameState.rooms)

io.on('connection', clientSocket => {
    console.log('A user connected...')
    console.log('The user id is: ', clientSocket.id)

    clientSocket.on('disconnect', () => {
        console.log(`User ${clientSocket.username} disconnected`)

        if (clientSocket.roomName !== undefined) {
            gameState.rooms[clientSocket.roomName].removePlayer(
                clientSocket.username
            )

            const roomIsEmpty =
                Object.keys(gameState.rooms[clientSocket.roomName].room) //TODO: Check if this works
                    .length === 0
            
            if (roomIsEmpty) {
                delete gameState.rooms[clientSocket.roomName]
                clientSocket.emit('UPDATE_ROOMS', getListOfRooms())
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
        console.log('This is our state before: ', gameState)
        console.log('Creating new room...')

        const { roomName, categories } = roomConfig

        clientSocket.roomName = roomName
        clientSocket.join(roomName)

        gameState.rooms[roomName] = new Room(roomName, categories)
        console.log('Room was added, here is our game state now: ', gameState)

        console.log(
            'CREATE_GAME_ROOM -> gameState.rooms[roomName]',
            gameState.rooms[roomName]
        )

        gameState.rooms[roomName].addPlayer(
            clientSocket.username,
            clientSocket.id
        )

        console.log(
            'Player was added. Here is our roomState now: ',
            gameState.rooms[roomName]
        )
    })

    clientSocket.on('GET_LIST_OF_ROOMS', () => {
        clientSocket.emit('LIST_OF_ROOMS', getListOfRooms())
    })
})

http.listen(port, () => console.log(`App listening on port ${port}!`))
