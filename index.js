const config = require('./server/config');
const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
    console.log('req for portfolio')
    res.sendFile( path.join(__dirname+'/react-client/build/index.html') );
});


app.get( '*', (req, res) => {
    res.send('404 Yo.')
})

const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);