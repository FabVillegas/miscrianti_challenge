function FavSongsService( $http, $q ){

    function FavSongsService(){

    }

    FavSongsService.prototype = {
        $load: function(){
            var deferred = $q.defer();
            $http({
                url: 'http://localhost:5050/api/v1/favoritesongs',
                method: 'GET',
            })
            .then(
                function( response ){
                    return deferred.resolve( response.data );
                },
                function( error ){
                    return deferred.reject( error );
                }
            );
            return deferred.promise;
        },
        $add: function( songObj ){
            var deferred = $q.defer();
            $http({
                url: 'http://localhost:5050/api/v1/favoritesongs',
                method: 'POST',
                data: songObj
            })
            .then(
                function( response ){
                    console.log( response );
                    return deferred.resolve( response );
                },
                function( error ){
                    console.error( error );
                    return deferred.reject( error );
                }
            );
            return deferred.promise;
        },
    };

    return FavSongsService;

}

module.exports = FavSongsService;