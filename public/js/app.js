angular.module('myApp',[])
.run(function($rootScope,$timeout){
  $timeout(function(){
    if(!$rootScope.md){
      $rootScope.md='# Simple Markdown Editor'
    }
  })
})