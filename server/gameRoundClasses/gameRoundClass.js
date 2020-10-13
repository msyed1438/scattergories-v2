class Player {
    constructor(name, socketId) {
        //TODO: Check if socketId defaulting to null should be allowed in the future
        this.name = name;
        this.socketId = socketId;
        this.wordsPlayed = null;
        this.points = 0;
    }

    addPoints(number) {
        this.points += number;
    }

    increment() {
        this.points++;
    }

    decrement() {
        this.points--;
    }

    setWordsPlayed(words) {
        this.wordsPlayed = words;
    }

    subtractPoints(number) {
        this.points -= number;
    }
}

class Room {
    constructor(roomName, categories) {
        (this.roomName = roomName),
            (this.room = {}),
            (this.gameIsActive = false), //TODO: Add toggle class method
            (this.lettersNotPlayedSoFar = [
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
                'w',
            ]),
            (this.categories = categories);
    }

    addPlayer(playerName, playerSocketId = null) {
        //TODO: Check if socketId defaulting to null should be allowed in the future
        console.log('Here is the playerName: ', playerName);
        this.room[playerName] = new Player(playerName, playerSocketId);
    }

    removePlayer(playerName) {
        delete this.room[playerName];
    }

    pickRandomLetter() {
        const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
        const numberOfLettersLeft = this.lettersNotPlayedSoFar.length;
        const randomIndex = getRandomInt(numberOfLettersLeft);

        const randomLetter = this.lettersNotPlayedSoFar.splice(randomIndex, 1);
        return randomLetter;
    }

    getRoundEntries() {
        return Object.values(this.room).map(({ name, wordsPlayed }) => {
            return { name, wordsPlayed };
        });
    }

    hasAllPlayersSubmissions() {
        const isNotEmpty = value => value !== null;

        const playerSubmissions = this.getRoundEntries();

        if (playerSubmissions.map(({ wordsPlayed }) => wordsPlayed).every(isNotEmpty)) {
            return true;
        } else {
            return false;
        }
    }

    resetPlayerSubmissions() {
        for (var player in this.room) {
            this.room[player].wordsPlayed = null
        }
    }
}

module.exports = Room;
