import geckos from '@geckos.io/server'

const io = geckos({cors: {allowAuthorization: true}})

io.onConnection(channel => {
  console.log(`new connection! (${channel.id})`)

  channel.onDisconnect(() => console.log(`bye felicia! (${channel.id})`))
  
  io.emit('msg', `new hoe: ${channel.id}`)
  channel.emit('msg', 'hi')
})

const port = process.env.PORT || 8081
io.listen(port)