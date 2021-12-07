var myApp = angular
                  .module("myModule", []) //DI
                  .controller("myController", function($scope){
                      var country = {
                          name : "USA",
                          capital : "Washington DC",
                          flag : ""
                      }
                  })
                  ;