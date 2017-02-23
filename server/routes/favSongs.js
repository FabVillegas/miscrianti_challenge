const  mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/27017' );
var db = mongoose.connection;

db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once('open', function(){
    console.log( 'Connected...' );
});

var songSchema = mongoose.Schema({
    artist: String,
    genre: String,
    title: String
});
var Song = mongoose.model( 'Song', songSchema );

exports.getAll = function( request, response ){
    Song.find( function( error, songs ){
        if( error ){
            console.error( error );
            response.send( [] );
        }
        else{
            response.send( songs );
        }
    });
};

exports.addFavSong = function( request, response ){
    var data = request.body;
    var song = new Song( data );
    song.save( function( error ){
        if( error ){
            response.send( { 'error': 'An error while inserting data has occurred' } );
        }
        else{
            console.log( 'Adding song: ' + JSON.stringify( song ) );
            response.send( song );
        }
    });
}