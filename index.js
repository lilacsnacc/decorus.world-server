// const INTERVALTIME = 33
// const BABYLON = require('babylonjs')
// const LOADERS = require('babylonjs-loaders')
// const http = require('http').createServer()
// const io = require('socket.io')(http, {
//   cors: {origin: '*'}
// })

import geckos from '@geckos.io/server'

const io = geckos()

// const engine = new BABYLON.NullEngine({
//   renderWidth: 256,
//   renderHeight: 128,
//   textureSize: 128
// });
// const scene = new BABYLON.Scene(engine);

io.onConnection(channel => {
  console.log(`new connection! (${channel.id})`)

  channel.onDisconnect(() => console.log(`bye felicia! (${channel.id})`))
  
  io.emit('msg', `new hoe: ${channel.id}`)
  channel.emit('msg', 'hi')
})
// io.on('connection', socket => {
//   console.log('user connected!')
//   io.emit('hi')

//   socket.on('u', message => {
//     console.log(message)
//   })

//   socket
// })

// function updateClients() {

// }

// setInterval(updateClients, INTERVALTIME)

const port = process.env.PORT || 8080
io.listen(port)