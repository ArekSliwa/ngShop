'use strict';

var siteCtrls = angular.module('siteCtrls', [] );




/* ---------------- products controllers --------------------- */

siteCtrls.controller('siteProducts', [ '$scope', '$http', 'cartSrv',  function ($scope, $http, cartSrv) {


    $http.get('model/products.json')
        .success( function ( data ) {


            $scope.products = data;
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });


    $scope.addToCart = function ( product ) {

        cartSrv.add( product );

    };


}]);

siteCtrls.controller('siteProduct', [ '$scope', '$http', '$routeParams', 'cartSrv',  function ($scope, $http, $routeParams, cartSrv) {


//on napisał .post !!!!!!!!!!!!!!!!!!!!!!!!!
    $http.get('model/products.json')
        .success( function ( data ) {

            var products = data;
            $scope.product = products[$routeParams.id];
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });


    $scope.addToCart = function ( product ) {

        cartSrv.add( product );

    };



}]);



/* ---------------- order controllers --------------------- */

siteCtrls.controller('siteOrders', [ '$scope', '$http',  function ($scope, $http) {


    $http.get('model/orders.json')
        .success( function ( data ) {


            $scope.orders = data;
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });




}]);



siteCtrls.controller('cartCtrl', [ '$scope', '$http', 'cartSrv', function ($scope, $http, cartSrv) {


    $scope.cart = cartSrv.show();

    $scope.clearCart = function () {

        cartSrv.clear();


    };

    $scope.total = function () {
        var total = 0;

        angular.forEach($scope.cart, function ( item ) {

             total += item.qty * item.price;

        });

        return total;
    }

    $scope.removeItem = function ( item ) {

        cartSrv.removeItem()

    };



}]);
