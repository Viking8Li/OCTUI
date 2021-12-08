var myApp = angular
                  .module("app", []) //DI
                  .controller("msg", function($scope){
                   
                  });

myApp.directive('message', function(){
    return {
        compile:function(tElement, tAttributes){
            console.log(tAttributes.text+ '- In Complie');

            return {
                pre:function($scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' - In Pre')
                },
                post:function($scope, iElement, iAttributes){
                    console.log(iAttributes.text + ' - In Post')
                }
            }
        },
        controller:function($scope, $element, $attrs){
            console.log($attrs.text + " - In Controller")
            // console.log($element)
        }
    }
})