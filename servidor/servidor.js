const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
  console.log('User %s connected.', socket.id)

  socket.on('enter-room', (room) => {
    socket.join(room)
    console.log('User %s entered the room %s.', socket.id, room)

    let players = {}
    if (io.sockets.adapter.rooms.get(room).size === 1) {
      players = {
        p1: socket.id,
        p2: undefined
      }
    } else if (io.sockets.adapter.rooms.get(room).size === 2) {
      const [p1] = io.sockets.adapter.rooms.get(room)
      players = {
        p1,
        p2: socket.id
      }
      console.log(
        'Room filled. Match starting!',
        room
      )
    }

    io.to(room).emit('players', players)
  })

  socket.on('publish-state', (room, state) => {
    socket.broadcast.to(room).emit('notification-state', state)
  })

  /*
  socket.on('artefatos-publicar', (room, artefatos) => {
    socket.broadcast.to(room).emit('artefatos-notificar', artefatos)
  })
  */

  socket.on('offer', (room, description) => {
    socket.broadcast.to(room).emit('offer', description)
  })

  socket.on('candidate', (room, candidate) => {
    socket.broadcast.to(room).emit('candidate', candidate)
  })

  socket.on('answer', (room, description) => {
    socket.broadcast.to(room).emit('answer', description)
  })

  socket.on('disconnect', () => {
    console.log('User %s disconnected.', socket.id)
  })
})

app.use(express.static('../cliente/'))
server.listen(PORT, () =>
  console.log(`Server started at ${PORT} port!\n`)
)
