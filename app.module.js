var angular = require('angular');
var angularRoute = require('angular-route');
require('./portfolioHome');



angular
  .module('portfolio',[
    'ngRoute',
    'portfolioHome'
  ])
