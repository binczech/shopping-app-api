const express = require('express')

const discouts = require('./data/discouts.json')
const hp = require('./data/hp.json')
const leaflet = require('./data/leaflet.json')

const app = express()
port = 3001
if (process.env.API_PORT) {
    port = process.env.API_PORT
}

app.get('/', (req, res) => {
  res.send('Endpoints: /discouts, /hp, /leaflet')
})

app.get('/discouts', (req, res) => {
    res.json(discouts)
})

app.get('/hp', (req, res) => {
    res.json(hp)
})

app.get('/leaflet', (req, res) => {
    res.json(leaflet)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})