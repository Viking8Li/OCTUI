var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($rootScope, $scope){
                  $scope.a = 1;
                  $scope.b = 2;
                  $scope.c = 3;

                  $scope.$watch('a', function(newV, oldV){
                      if(newV != oldV)
                      {
                          console.log("a modified to "+newV)
                      }
                  })
                  $scope.$watch('b', function(newV, oldV){
                      if(newV != oldV)
                      {
                          console.log("b modified to "+newV)
                      }
                  })
                  $scope.$watch('c', function(newV, oldV){
                      if(newV != oldV)
                      {
                          console.log("c modified to "+newV)
                      }
                  })
                  $rootScope.$watch(function(){
                      console.log('----digest process started---')
                  })
                    
});

