jmail.controller( 'InboxCtrl', ['$scope', '$state', '$stateParams', 'Restangular', 'EmailService', function($scope, $state, $stateParams, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();

  $scope.emailData.requestEmails();

  console.log($scope.emailData.getEmails())

  $scope.emails = $scope.emailData.getEmails();

  $scope.openEmail = function(email) {
    $scope.emailData.setCurrentEmail(email);
    $state.go("jmail.email", { id: email.id });
  }

}]);
