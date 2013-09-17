angular.module('sample.filters', [])

// greet greets the named user.
.filter('greet', function() {
  return function(s) {
    return 'Hello, ' + s + '!';
  };
})

;
