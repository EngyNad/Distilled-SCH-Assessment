/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
  angular.module('beer')
          .config(routeConfig);

  //route configuration
  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'app/components/home/home.html',
              controller: 'HomeController',
              controllerAs: 'HomeCtrl',
             resolve: {
                randomeBeer: ['BeersService', function (BeersService) {
                    return BeersService.getRandomeBeer();
                  }]
              }
            });
          

    $urlRouterProvider.otherwise('/');
  }
})();
