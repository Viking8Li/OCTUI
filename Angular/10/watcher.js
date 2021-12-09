var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($scope){

                    $scope.emps = [
                        {empno:"1001", ename:"Jill"},
                        {empno:"1002", ename:"Jack"},
                        {empno:"1003", ename:"Jim"},
                        {empno:"1004", ename:"John"},
                        {empno:"1005", ename:"Jhonny"}
                    ]
                        

                    // //reference / equality
                    // $scope.$watch("o", function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         $scope.o.c = $scope.o.a * $scope.o.b;
                    //     }
                    // }, true)
});

