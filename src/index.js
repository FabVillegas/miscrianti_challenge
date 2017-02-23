require( './vendor_dependencies' );
require( './shared/services/favsongs/' );
require( './modules/home' );
require( './modules/favSongs' );

angular.module( 'myApp', [
    'ui.router',
    'ngMessages',
    'ngMaterial',
    'myApp.home',
    'myApp.favSongs'
])
.config( [ '$urlRouterProvider', require( './config' ) ] );