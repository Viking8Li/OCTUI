var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($rootScope, $scope){
                  $scope.a = 1;
                  $scope.b = 2; 
                  $scope.s = 0;
                  
                  $scope.calcSum = function(){
                      $scope.s = $scope.a + $scope.b;
                  }
});

var btnClick = function(){
    var $scope = angular.element($('#div1')).scope();
    // $scope.s = Number($scope.a) + Number($scope.b);
    // $scope.$apply()

    $scope.$apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    })
}

