class Player {
    constructor(name, socketId) { //TODO: Check if socketId defaulting to null should be allowed in the future
        this.name = name
        this.socketId = socketId
        this.wordsPlayed = []
        this.points = 0
    }

    addPoints(number) {
        this.points += number
    }

    increment() {
        this.points++
    }

    decrement() {
        this.points--
    }

    addWordsToWordsPlayed(words) {
        this.wordsPlayed.push(words)
    }

    subtractPoints(number) {
        this.points -= number
    }
}

class Room {
    constructor(roomName, categories) {
        this.roomName = roomName,
        this.room = {},
        this.gameIsActive = false,
        this.lettersNotPlayedSoFar = [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'r',
                's',
                't',
                'w'
            ],
        this.categories = categories
    }

    addPlayer(playerName, playerSocketId = null) { //TODO: Check if socketId defaulting to null should be allowed in the future
        console.log('Here is the playerName: ', playerName)
        this.room[playerName] = new Player(playerName, playerSocketId)
    }

    removePlayer(playerName) {
        delete this.room[playerName]
    }

    pickRandomLetter() {
        const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
        const numberOfLettersLeft = this.lettersNotPlayedSoFar.length
        const randomIndex = getRandomInt(numberOfLettersLeft)

        const randomLetter = this.lettersNotPlayedSoFar.splice(randomIndex, 1)
        return randomLetter
    }
}

module.exports = Room
