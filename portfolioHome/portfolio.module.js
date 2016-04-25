var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('portfolioHome',[

  ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: './portfolioHome/templates/home.html',
        // controller: 'portfolioController'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
