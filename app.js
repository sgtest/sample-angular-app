angular.module('sample', ['ngResource', 'sample.config', 'sample.filters'])

.controller('GreetingCtrl', ['$scope', 'User', 'myConfig', 'version', function($scope, User, myConfig, version) {
  $scope.myName = 'John';
  $scope.myConfig = myConfig;
  $scope.version = version;

  $scope.user = User.get({login: 'sqs'});
}])

.constant('version', 'v1.2.3')

.factory('User', ['$resource', function($resource) {
  return $resource('https://api.github.com/users/:login');
}])

;
