angular.module('sample.filters', [])

.filter('greet', function() {
  return function(s) {
    return 'Hello, ' + s + '!';
  };
})

;
