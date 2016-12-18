var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'IndexController',
    controllerAs: 'iCtrl'
  })
  .when('/welcome', {
    templateUrl: 'partials/welcome.html',
    controller: 'WelcomeController'
  })
  .when('/new_question', {
    templateUrl: 'partials/new_question.html',
    controller: 'QuestionController',
    controllerAs: 'qCtrl'
  })
  .when('/question/:id/new_answer', {
    templateUrl: 'partials/new_answer.html',
    controller: 'ViewController',
    controllerAs: 'vCtrl'
  })
  .when('/question/:id', {
    templateUrl: 'partials/view_question.html',
    controller: 'ViewController',
    controllerAs: 'vCtrl'
  })
  .when('/logout',{
    templateUrl: 'partials/index.html',
    controller: 'LogoutController'
  })
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
  });
  $locationProvider.html5Mode(true).hashPrefix('!')
});
