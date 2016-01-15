'use strict';

var adminCtrls = angular.module('adminCtrls', [] );


/* ---------------- users controllers --------------------- */



adminCtrls.controller('users', [ '$scope', '$http',  function ($scope, $http) {


    $http.get('model/users.json')
        .success( function ( data ) {
            $scope.users = data;

        })
        .error( function (data, status, headers, config) {
            console.log("Dane się nie pobrały");
        });

    $scope.delete = function ( user ) {

        $scope.users.splice($scope.users.indexOf(user), 1);

    }



}]);

adminCtrls.controller('userEdit', [ '$scope', '$http', '$routeParams',  function ($scope, $http, $routeParams) {


//on napisał .post !!!!!!!!!!!!!!!!!!!!!!!!!
    $http.get('model/users.json')
        .success( function ( data ) {

            var users = data;
            $scope.user = users[$routeParams.id];
        })
        .error( function ( data, status, headers, config ) {
            console.log('Dane sie nie pobrały');
        });

    $scope.saveChanges = function ( product ) {
        console.log("zapisano zmiany użytkownika o indexie: " + $routeParams.id);
        console.log(product);

        //Zapisać zmiany przez API
    }


}]);

adminCtrls.controller('userCreate', [ '$scope',  function ($scope) {



    $scope.createUser = function () {



        //Przesłać dane przez API
        console.log( $scope.user );
    }


}]);





/* ---------------- products controllers --------------------- */

adminCtrls.controller('products', [ '$scope', '$http',  function ( $scope, $http ) {


    $http.get('model/products.json')
        .success( function ( data ) {


            $scope.products = data;
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });

    $scope.delete = function ( product ) {


        //usunąć dane z bazy przez API


        $scope.products.splice($scope.products.indexOf(product), 1)


    };




}]);

adminCtrls.controller('productEdit', [ '$scope', '$http', '$routeParams',  function ($scope, $http, $routeParams) {


//on napisał .post !!!!!!!!!!!!!!!!!!!!!!!!!
    $http.get('model/products.json')
        .success( function ( data ) {

            var products = data;
            $scope.product = products[$routeParams.id];
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });

    $scope.saveChanges = function ( product ) {
        console.log("zapisano zmiany w produkcie o indexie: " + $routeParams.id);
        console.log(product);

        //Zapisać zmiany przez API
    }


}]);

adminCtrls.controller('productCreate', [ '$scope',  function ($scope) {



    $scope.createProduct = function () {



        //Przesłać dane przez API
        console.log( $scope.product );
    }


}]);

/* ---------------- order controllers --------------------- */

adminCtrls.controller('orders', [ '$scope', '$http',  function ($scope, $http) {


    $http.get('model/orders.json')
        .success( function ( data ) {


            $scope.orders = data;
        })
        .error( function ( data, status, headers, config ) {
            console.log('Danie sie nie pobrały');
        });

    $scope.delete = function ( product ) {


        //usunąć dane z bazy przez API


        $scope.orders.splice($scope.orders.indexOf(product), 1)


    };

    $scope.changeStatus = function ( order ) {

        /*
         //zmienić status przez API
         //console.log(order);
         if(order.status === 0) {
         order.status = 1;
         } else {
         order.status = 0;
         }
         */

        order.status === 0 ? order.status = 1 : order.status = 0;

    };


}]);
