const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect
('mongodb+srv://jinah:1234@bolierplate.ufc3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongo connected..');
}).catch(err => {console.log(err)})

app.get('/',(req,res) => res.send('hello world!'))

app.listen(port, () =>  console.log('example app listening on port ' + port))


