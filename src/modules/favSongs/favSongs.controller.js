function favSongsController( FavSongsService, $mdToast ){
    var vm = this;
    vm.songs = [];
    vm._favSongsService = new FavSongsService();
    vm.init = init;

    vm.init();

    function init(){
        vm._favSongsService.$load().then(
            function( songsData ){
                vm.songs = songsData;
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
    };
}

module.exports = favSongsController;