angular.module('loginApp',[])
   .controller('LoginController', function($scope) {
    $scope.user = {}; 

    $scope.login = function() {
         alert("Login successful!\nUsername:"+$scope.user.username);
    };
   });