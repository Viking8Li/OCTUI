var myApp = angular.module("app", ['ngRoute']) //DI
                
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/first-msg',{
            // template:'<b>This is the first message</b>'
            templateUrl:'msg1.html',
            controller:'message1'
        })
        .when('/second-msg',{
            template:'<b>This is second message</b>'
        })
}])

myApp.controller('message1', ['$scope', function($scope){
    $scope.a = 10;
    $scope.b = 20;
}])


