function homeConfig( $stateProvider ){
    $stateProvider.state( 'home',{
        url: "/",
        templateUrl: 'templates/home.html',
        controller: 'homeController',
		controllerAs: 'homeCtrl'
    });
}

module.exports = homeConfig;