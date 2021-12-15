var myApp = angular.module("app", []) //DI
myApp.controller('emp', function($scope){
    $scope.message = "This message"
}) 

myApp.directive('myInfoMsg', function(){
    return {
        templateUrl:'my-info-msg.html'
    }
});