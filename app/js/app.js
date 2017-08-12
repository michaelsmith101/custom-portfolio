(function() {
  function config($locationProvider, $stateProvider) {
  $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
       });
  }
  angular
     .module('ngApp', ['ui.router','yaru22.md'])
 })();
