function favSongsConfig( $stateProvider ){
    $stateProvider.state( 'favSongs',{
        url: "/fav-songs",
        templateUrl: 'templates/favSongs.html',
        controller: 'favSongsController',
		controllerAs: 'favSongsCtrl'
    });
}

module.exports = favSongsConfig;