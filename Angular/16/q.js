// var myApp = angular.module("app", []) //DI
// myApp.controller('emp', function($scope){
//     function add(x,y){
//         return x+y;
//     }
//     $scope.result = add(5,2);
// }) 


// var myApp = angular.module("app", []) //DI
// myApp.controller('emp', function($scope,$timeout){
//     function add(x,y, callback){
//         $timeout(function(){
//             callback(x + y);
//         }, 1000)
//     }

//     var startTime = Date.now();

    // add(5,2, function(result){
    //     add(result,2, function(result){
    //         add(result,1, function(result){
    //             $scope.result = result;
    //             $scope.elapsedTime = Date.now() - startTime
    //         },function(error){/**/})
    //     },function(error){/**/})
    // },function(error){/**/})






var myApp = angular.module("app", []) //DI
myApp.controller('emp', function($scope,$timeout, $q){
    
    function add(x,y){
        var q = $q.defer()
        setTimeout(function(){
            var result = x+y;
            if(result >=0 ){
                q.resolve(x + y);
            }
            else{
                q.reject('negative values: '+ result)
            }
          
        }, 100);
        return q.promise
    }


    var startTime = Date.now();
    add(5,2)
        .then(function(result){
            return add(result, -10) 
        })
        .then(function(result){
            return add(result, 1) 
        })
        .then(function(result){
            $scope.result =result;
        })
        .catch(function(error){
            console.log("Error Message:"+error)
            $scope.result =error;
        })
        .finally(function(){
            $scope.elapsedTime = Date.now() - startTime
        })
   
    // var startTime = Date.now();
    // var promise = add(5,2);

    // promise.then(function(result){
    //     $scope.result =result;
    //     $scope.elapsedTime = Date.now() - startTime
    // })
   
}) 
