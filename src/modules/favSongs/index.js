angular.module( 'myApp.favSongs', [
    'myApp.favSongsService',
])
.config( [ '$stateProvider', require( './favSongs.config' ) ] )
.controller( 'favSongsController', [ 'FavSongsService', '$mdToast', require( './favSongs.controller' ) ] );