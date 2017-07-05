angular.module('pmApp.greeter', [])
.factory('greeter', function() {
  return {
    // ...
    getGreeting: function(name) {
      return "Hello " + name;
    },
    getHello: function() {
      return {value: "Application ng 1x"};
    }
  };
});