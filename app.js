import express from 'express'
import path from 'path'

const app = express()
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/timmaia', (request, response, next) => {
  response.sendFile(__dirname + '/views/Timmaia.html')
})

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/Home.html')
})

app.get('/historia', (request, response, next) => {
  response.sendFile(__dirname + '/views/History.html')
})

app.get('/albums', (request, response, next) => {
  response.sendFile(__dirname + '/views/Albums.html')
})

app.listen(8080, () => console.log('Server Started'))
