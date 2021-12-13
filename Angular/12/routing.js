var myApp = angular.module("app", ['ngRoute']) //DI
                
myApp.config(['$routeProvider', function($routeProvider){
    // $routeProvider
        // .when('/first-msg',{
        //     // template:'<b>This is the first message</b>'
        //     templateUrl:'msg1.html',
        //     controller:'message1'
        // })
        // .when('/second-msg',{
        //     template:'<b>This is second message</b>'
        // })
        // .when('/',{
        //     template:'<b>Welcome to the App</b>'
        // })
        // .otherwise({
        //     // template:'<b>Wrong Path</b>'
        //     // redirectTo:"/"

        //     redirectTo: function(){
        //         alert("Wrong Path")
        //         return "/"
        //     }
        // })


    $routeProvider
        .when('/sumurl/:a/:b', {
            templateUrl:'sumurl.html',
            controller:'sumurl'
        })
        .when('/suminput', {
            templateUrl:'suminput.html',
            controller:'suminput'
        })
        .when('/',{
            template:'<b>Plz click a link on the left</b>'
        })
}])

// myApp.controller('message1', ['$scope', function($scope){
//     $scope.a = 10;
//     $scope.b = 20;
// }])


myApp.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
})
myApp.controller('suminput', function($scope, $location, $interpolate){
    $scope.a = 0
    $scope.b = 0

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        $location.path(url)
    }
})


