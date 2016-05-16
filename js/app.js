var app = angular.module('campusCrunch',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test-a', {
        templateUrl: 'partials/test-a.html',
        controller: 'ControllerA'
      }).
      when('/test-b', {
        templateUrl: 'partials/test-b.html',
        controller: 'ControllerB'
      }).
      otherwise({
        redirectTo: '/test-a'
      });
  }]);



app.controller('ControllerA', function($scope) {

  $scope.test = "THIS SHIT WORKED!";

});

app.controller('ControllerB', function($scope) {

  $scope.test = "THIS SHIT REALLLLLYYYY WORKED!";

});
