angular.module('myApp', []).controller('mainCtrl', function($scope) {
    $scope.greet = function() {
        $scope.showGreeting = true;
        $timeout(function () {
           $scope.showGreeting = false;
        }, 3000);
    }
});
