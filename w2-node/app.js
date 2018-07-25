const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
//tell the api to respond to anybody in universe
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let tags = []

app.get('/', function(req, res){
    res.send('Welcome to the Tag Wall API')
})

app.post('/tag', function(req, res){
    console.log(req.body.tag)
    tags.push(req.body.tag)
    res.send('This is how you add tags')
})

app.get('/tag', function (req,res){
    res.send(tags);
})
// app.get('/caterpillar', function(req, res){
//     res.send('Bzz Bzz')
// })

// app.get('/user/:name', function(req, res){
//     res.send('User profile page for user: ' + req.params.name)
// })

app.listen(4200, function(){
    console.log('Example app listening on port 4200!')
})