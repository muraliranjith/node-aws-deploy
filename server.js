const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs AWS Deployments'});
})

app.get('/api/get/user', (req,res) => {
    res.send({name : 'Devs', email: 'devs@gmail.com', 'role': 'Developers'});
})

app.listen(9000, (req,res) => {
    console.log('server running on port 9000')
})