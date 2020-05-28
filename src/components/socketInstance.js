import io from 'socket.io-client'

const socket = io('localhost:3000')
console.log('meow')

export default socket

