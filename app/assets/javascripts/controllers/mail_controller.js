jmail.controller( 'EmailCtrl', ['$scope', '$state', 'Restangular', 'EmailService', function($scope, $state, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();
  console.log($scope.emailData);
  // $scope.emailData.requestEmails();
  //
  // $scope.emails = $scope.emailData.getEmails();

  $scope.emails = [{from: "Fake Person", subject:"Fake Subject", body: "Fake Body", time: new Date(2016, 1, 1, 1, 1)}];

}]);
