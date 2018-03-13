var myapp = angular.module('myapp');

myapp.directive('nameValidation', [function(){

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, el, attrs, ngModelCtrl){
                ngModelCtrl.$validators.nameValidation = function(val){
                    if(val && val.startsWith('a')){
                        return false;
                    }
                    return true;
                };

            }

        };

}]);