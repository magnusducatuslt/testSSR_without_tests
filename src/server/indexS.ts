import express from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import html from '../client/html'

const PORT = 3000
const server = express()

server.use(express.static('dist'))
server.get('/', (req, res) => {
  const body = renderToString(React.createElement(App))
  const title = 'Server side Rendering test'
  res.send(
    html({
      body,
      title,
    })
  )
})

server.listen(PORT, () => `server started at ${PORT}`)
