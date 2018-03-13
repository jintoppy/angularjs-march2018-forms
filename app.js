var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', ['$scope', function($scope){
    $scope.newVal = {};
    $scope.onFormSubmit = function(form){
        if(form.$invalid){
            alert('invalid');
            return;
        }

        console.log($scope.newVal);
    };
}]);

