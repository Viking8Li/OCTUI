var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($scope){
                   
                  });

myApp.directive('message', function($interpolate){
    return {
        compile:function(iElement, tAttributes){
            console.log(tAttributes.text+ '- In Complie');
            iElement.css("border","1px solid #C0C0C0")

            return {
                pre:function($scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' - In Pre')
                },
                post:function($scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' - In Post')
                    if(iAttributes.text === "3")
                    {
                        iElement.css("border","1px solid red")
                    }
                    iElement.on("click",$scope.btnClick)
                }
            }
        },
        controller:function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " - In Controller")
            // console.log($attrs.text + " - In Controller")
            // console.log($element)

            $scope.btnClick = function(){
                alert(v)
            }
        }
    }
})