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
                        
                    $scope.addEmp = function(){
                        var newEmpNo = 1000+$scope.emps.length + 1;
                        var newEname = "ename"+newEmpNo;

                        $scope.emps.push({empno:newEmpNo, ename:newEname})
                    }
                    $scope.modify3rdEmp = function(){
                        $scope.emps[2].ename = "Test"
                    }

                    $scope.$watch('emps', function(newValue, oldValue){
                        console.log("No. of Employees:"+$scope.emps.length)
                    })
});

