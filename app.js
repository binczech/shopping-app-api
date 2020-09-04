const express = require('express')
const cors = require('cors')

const discouts = require('./data/discouts.json')
const hp = require('./data/hp.json')
const leaflet = require('./data/leaflet.json')

const app = express()
app.use(cors())
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

app.get('/leaflet/:leafletName', (req, res) => {
    res.json(leaflet)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})