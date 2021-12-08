var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($scope){

                    $scope.o = {
                        a:1,
                        b:2,
                        c:3
                    };

                    //reference / equality
                    $scope.$watch("o", function(newValue, oldValue){
                        if(newValue != oldValue){
                            $scope.o.c = $scope.o.a * $scope.o.b;
                        }
                    }, true)
//#region 
                    //   $scope.a = 1;
                    //   $scope.b = 2;
                    //   $scope.c = 3;
                    //   $scope.d = 4;


                    // $scope.UpdateC = function(){
                    //     $scope.c = $scope.a * 4;
                    // }

                    // $scope.$watchGroup(["a","b"], function(newValue, oldValue){
                    //     if(newValue != oldValue){
                    //         // console.log("Updated C to "+newValue)
                    //         $scope.c = $scope.a * $scope.b;
                    //     }
                    // })
//#endregion

                  });

