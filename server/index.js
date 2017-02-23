const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const favSongs = require( './routes/favSongs' );

const app = express();

var allowCrossDomain = function( request, response, next ){
    response.header('Access-Control-Allow-Origin', 'example.com');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( cors() );

app.get( '/api/v1/favoritesongs', favSongs.getAll );
app.post( '/api/v1/favoritesongs', favSongs.addFavSong );


app.listen( 5050, function(){
    console.log( 'Listening on port 5050...' );
});