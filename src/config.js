function appConfig( $urlRouterProvider ){
    $urlRouterProvider.otherwise( '/' );
}

module.exports = appConfig;