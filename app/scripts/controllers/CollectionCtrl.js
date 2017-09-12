(function() {
    function CollectionCtrl() {
        // We add an albums property and set its value to an empty array. Within the for loop, we use angular.copy to make copies of albumPicasso and push them to the array.
        this.albums = [];
        for (var i=0; i<12; i++) {
            this.albums.push(angular.copy(albumPicasso));
        }
    }
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
}) ();
