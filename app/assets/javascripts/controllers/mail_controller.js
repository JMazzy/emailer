jmail.controller( 'EmailCtrl', ['$scope', '$state', 'Restangular', 'ModalService', function($scope, $state, Restangular, ModalService){

  $scope.emails = [{from: "Fake Person", subject:"Fake Subject", body: "Fake Body", sent: new Date(2016, 1, 1, 1, 1)}];

}]);
