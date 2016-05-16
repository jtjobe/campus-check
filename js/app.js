var app = angular.module('campusCrunch',['ngRoute', 'campusControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/campus-list', {
        templateUrl: 'partials/campus_list.html',
        controller: 'CampusList'
      }).
      when('/campus-show', {
        templateUrl: 'partials/campus_show.html',
        controller: 'CampusShow'
      }).
      otherwise({
        redirectTo: '/campus-list'
      });
  }]);

var campusControllers = angular.module('campusControllers', [])

campusControllers.controller('CampusList', function($scope, $http) {
  $http.get('campuses.json').success(function(data) {
    $scope.campuses = data;
  });

  $scope.test = "THIS SHIT WORKED!";

});

campusControllers.controller('CampusShow', function($scope) {

  $scope.test = "THIS SHIT REALLLLLYYYY WORKED!";

});
