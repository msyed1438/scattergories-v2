class Player {
    constructor(name, socketId) {
        this.name = name
        this.socketId = socketId
        this.wordsPlayed = []
        this.points = 0

    }

    addPoints(number) {
        this.points += number
    }

    addWordsToWordsPlayed(words) {
        this.wordsPlayed.push(words)
    }

    subtractPoints(number) {
        this.points -= number
    }

}



class Room {
    constructor(roomName) {
        this.room = {}
        this.roomName = roomName,
        this.lettersNotPlayedSoFar = [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ]
    }

    addPlayer(playerName, playerSocketId) {
        this.room[playerName] = new Player(playerName, playerSocketId)
    }

    pickRandomLetter() {

        const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
        const numberOfLettersLeft = this.lettersNotPlayedSoFar.length
        const randomIndex = getRandomInt(numberOfLettersLeft)
          
        const randomLetterPicked = this.lettersNotPlayedSoFar.splice(randomIndex, 1)
        return randomLetterPicked

    }
}

module.exports = Room;