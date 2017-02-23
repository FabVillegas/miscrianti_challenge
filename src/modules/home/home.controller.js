function homeController( FavSongsService, $mdToast ){
    var vm = this;
    vm.favSongsForm = {};
    vm.song = {};
    vm._favSongsService = new FavSongsService();
    
    vm.addSong = addSong;

    function addSong(){
        if( vm.favSongsForm.$valid ){
            vm._favSongsService.$add( vm.song ).then(
                function( response ){
                    vm.song = {};
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent( 'Song added!')
                        .position( 'bottom right' )
                        .hideDelay( 3000 )
                    );
                },
                function( error ){
                    console.error( error );
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent( 'Something went wrong :C!')
                        .position( 'bottom right' )
                        .hideDelay( 3000 )
                    );
                }
            );
        }
        else{
            console.error( 'Invalid form...' );
            $mdToast.show(
                $mdToast.simple()
                .textContent( 'Please, fill the song data...')
                .position( 'bottom right' )
                .hideDelay( 3000 )
            );
        }
    };
}

module.exports = homeController;