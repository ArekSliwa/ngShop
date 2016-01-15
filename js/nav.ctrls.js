'use strict';

var navCtrls = angular.module('navCtrls', [] );



navCtrls.controller('navigation', [ '$scope', '$location', 'cartSrv',  function ($scope, $location, cartSrv) {

    //console.log($location.path());

    $scope.navigation = function () {

        if ( /^\/admin/.test($location.path())) {

            return 'partials/admin/navigation.html';
        } else {

            return 'partials/site/navigation.html';
        };

    };



    $scope.isActive = function ( path ) {

        return $location.path() === path;

    };






}]);




//console.log(  );