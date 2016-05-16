var app = angular.module('campusCrunch', ['ngRoute', 'campusControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/campuses', {
        templateUrl: 'partials/campus_list.html',
        controller: 'campusList'
      }).
      when('/campuses/:campusId', {
        templateUrl: 'partials/campus_show.html',
        controller: 'campusShow'
      }).
      otherwise({
        redirectTo: '/campuses'
      });
  }]);

var campusControllers = angular.module('campusControllers', [])

campusControllers.controller('campusList', ['$scope','$http', function($scope, $http) {
  $http.get('campuses.json').success(function(data) {
    $scope.campuses = data;
  });
}]);

campusControllers.controller('campusShow', ['$scope','$routeParams', function($scope, $routeParams) {

  $scope.campusId = $routeParams.campusId;

}]);