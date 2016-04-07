jmail.controller( 'EmailCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Restangular){

  $scope.emails = [{from: "Fake Person", subject:"Fake Subject", body: "Fake Body", sent: new Date(2016, 1, 1, 1, 1)}];

}]);
