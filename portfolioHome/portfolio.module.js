var angular = require('angular');
var angularRoute = require('angular-route');
var fullPage = require('angular-fullpage.js')

angular
  .module('portfolioHome',[
    'fullPage.js'

  ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: './portfolioHome/templates/home.html',
        controller: 'PortfolioCtrl'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
