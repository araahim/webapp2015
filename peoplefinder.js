var peoplebase = angular.module('peoplebase', ['firebase']);
peoplebase.controller('PeopleCtrl', function PeopleCtrl ($scope, $firebase){
 $scope.appName = "peoplebase";

 $scope.people = [];

 

 $scope.add = function() {  
  $scope.people.push($scope.person);
  $scope.person = "";
 };

 $scope.delete = function(person) {  
  for(var i=0; i < $scope.people.length; i++) {   
   if($scope.people[i] == person) {
    $scope.people.splice(i,1);
   } 
  }
 };

});




			
			


