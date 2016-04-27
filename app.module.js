var angular = require('angular');
var angularRoute = require('angular-route');
require('./portfolioHome');
require('./sidebar');



angular
  .module('portfolio',[
    'ngRoute',
    'portfolioHome',
    'sidebar'
  ])
