angular.module( 'myApp.favSongsService', [] )
.service( 'FavSongsService', [ '$http', '$q', require( './favsongs.service' ) ] );