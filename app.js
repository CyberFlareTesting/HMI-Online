const express = require('express')
const app = express()
const path = require('path')
const http = require('http');
const server = http.createServer(app)
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, "/HMI/data")));

app.get('/',function(req, res) {
    res.redirect('/Convert')
})
app.get('/index.html',function(req, res) {
    res.redirect('/Convert')
})

app.get('/Convert',function(req, res) {
    res.sendFile(__dirname + '/HMI/index.html')
})

app.get('/ConvertBack',function(req, res) {
    res.sendFile(__dirname + '/HMI/data/ConvertBack.html')
})

app.get('/xmlUpload',function(req, res) {
    res.sendFile(__dirname + '/HMI/data/xmlUpload.html')
})

app.get('/Overview',function(req, res) {
    res.sendFile(__dirname + '/HMI/data/overview.html')
})

app.get('/BatchCompare',function(req, res) {
    res.sendFile(__dirname + '/HMI/data/BatchUpload.html')
})

app.get('/Contact',function(req, res) {
    res.sendFile(__dirname + '/HMI/data/Contact.html')
})


server.listen(port, function () {
    var host = server.address().address
     console.log("app listening at http://%s:%s", (host.includes("::"))? "localhost": host, port)
})
