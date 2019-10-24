const app = require('express')();
const express = require('express');
const path = require( 'path' );
const config = require('./config');
const routes = require('./routes');

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '../', 'client/build')));

app.get('/', (req,res) =>{
    console.log('req for portfolio')
    res.sendFile( path.join(__dirname+'/react-client/build/index.html') );
});

app.all( '/*', routes );
// common 404
app.use( (req, res) => res.status( 404 ).send('Not Found') );

const listen = ( log ) => {
    return app.listen( config.PORT, () => {
        console.log( log );
    });
  }

module.exports.init = () => {
    return listen( `Server listening on port ${ config.PORT }.` );
};