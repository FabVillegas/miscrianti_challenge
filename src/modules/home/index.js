angular.module( 'myApp.home', [
    'myApp.favSongsService',
])
.config( [ '$stateProvider', require( './home.config' ) ] )
.controller( 'homeController', [ 'FavSongsService', '$mdToast', require( './home.controller' ) ] );