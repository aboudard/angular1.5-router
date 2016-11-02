function usersService($http) {

    var service = {};
    service.user = {};

    service.isAdmin = function() {
        return true;
    };

    service.getFullName = function(user) {
        return user.firstName + " " + user.lastName;
    }

    service.getUser = function(id) {
        return $http({
            method: 'GET',
            url: '/users/' + id
        }).then(function(response) {
            return response.data;
        });
    };

    return service;
}

usersService.$inject = ['$http'];
angular.module('pmApp.users', [])
    .factory('users', usersService);