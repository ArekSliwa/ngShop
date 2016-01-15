/**
 * Created by global on 26.06.15.
 */

'use strict';

var myServices = angular.module( 'myServices', [] );


myServices.factory( 'cartSrv', [ 'store', function ( store ) {

   // store.remove('cart');




    if (store.get( 'cart' )) {
        var cart = store.get('cart');
    } else {
        var cart = [];
    }


    cart.show = function () {

        return cart;

    };

    cart.add = function ( product ) {


        //jeżeli nie prawdą jest, że jest jakiś obiekt w tablicy cart,
        // który ma właściwość 'name' taką jak kliknięty produkt, to włóż ten produkt do koszyka
        if( !cart.some(function (v) {
                return v.name == product.name;
            })) {

            cart.push(product);

        }

        //przeiteruj przez wszystkie elementy tablicy cart
        //i sprawdz który obiekt ma identyczną wartość name jak klikniety produkt.

        cart.forEach(function (element) {

           if (element.name == product.name) {



               if (element.hasOwnProperty('qty')) {

                   //jeżeli produkt ma własciwość qty - inkrementuj ją.

                   element.qty++;

               } else {

                   // W innym przypadku, dodaj właściwość qty i ustaw jej wartość na 1.
                   element.qty = 1;

               }

            }


        });

        store.set('cart', cart);

    };

    cart.clear = function (  ) {

        store.remove( 'cart' );
        cart.length = 0;

    };


    cart.removeItem = function () {



    };

    return cart;
}]);