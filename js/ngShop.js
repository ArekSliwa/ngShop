
'use strict';

var ngShop = angular.module('ngShop', ['ngRoute', 'angular-storage', 'adminCtrls', 'navCtrls', 'siteCtrls', 'myServices'] );


ngShop.config([ '$routeProvider', '$locationProvider', '$httpProvider',  function( $routeProvider, $httpProvider, $locationProvider )  {


/*
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
            //.hashPrefix('!');
    }
*/

    // enable html5Mode for pushstate ('#'-less URLs)
    //$locationProvider.html5Mode(true);
        //.hashPrefix('!');


    /* ------------- Admin users -------------- */

    $routeProvider.when('/admin/users', {
        controller: 'users',
        templateUrl: 'partials/admin/users.html'
    });

    $routeProvider.when('/admin/user/edit/:id', {
        controller: 'userEdit',
        templateUrl: 'partials/admin/user-edit.html'
    });

    $routeProvider.when('/admin/user/create', {
        controller: 'userCreate',
        templateUrl: 'partials/admin/user-create.html'
    });

    /* ------------- Admin products -------------- */

    $routeProvider.when('/admin/products', {
        controller: 'products',
        templateUrl: 'partials/admin/products.html'
    });

    $routeProvider.when('/admin/product/edit/:id', {
        controller: 'productEdit',
        templateUrl: 'partials/admin/product-edit.html'
    });

    $routeProvider.when('/admin/product/create', {
        controller: 'productCreate',
        templateUrl: 'partials/admin/product-create.html'
    });

    /* ------------- Admin orders -------------- */

    $routeProvider.when('/admin/orders', {
        controller: 'orders',
        templateUrl: 'partials/admin/orders.html'
    });


    /* ------------- Site products -------------- */

    $routeProvider.when('/products', {
        controller: 'siteProducts',
        templateUrl: 'partials/site/products.html'
    });

    $routeProvider.when('/product/:id', {
        controller: 'siteProduct',
        templateUrl: 'partials/site/product.html'
    });

    $routeProvider.when('/cart', {
        controller: 'cartCtrl',
        templateUrl: 'partials/site/cart.html'
    });

    /* ------------- Site orders -------------- */

    $routeProvider.when('/orders', {
        controller: 'orders',
        templateUrl: 'partials/site/orders.html'
    });






    /* ------------- default -------------- */

    $routeProvider.otherwise({
        redirectTo: '/products'
    });




}]);

