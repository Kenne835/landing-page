var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
    })
    .when('/repos',{
      templateUrl: '/views/templates/repos.html',
      controller: 'UserController as uc'
    });
});

myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('white', {
  '50': 'ffffff',
  '100': 'ffffff',
  '200': 'ffffff',
  '300': 'ffffff',
  '400': 'ffffff',
  '500': 'ffffff',
  '600': 'ffffff',
  '700': 'ffffff',
  '800': 'ffffff',
  '900': '37474f',
  'A100': 'ffffff',
  'A200': 'ffffff',
  'A400': 'ffffff',
  'A700': 'ffffff',
  'contrastDefaultColor': 'light',

  'contrastDarkColors': ['50', '100',
   '200', '300', '400', 'A100'],
  'contrastLightColors': undefined
});
  $mdThemingProvider.theme('default')
    .accentPalette('red')
    .backgroundPalette('white');
});
