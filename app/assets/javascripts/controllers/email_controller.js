jmail.controller( 'EmailCtrl', ['$scope', '$state', '$stateParams', 'Restangular', 'EmailService', function($scope, $state, $stateParams, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();

  $scope.emailData.requestEmails();

  $scope.emailData.emailFromID( Number($stateParams.id) );

  $scope.email = $scope.emailData.getCurrentEmail();

  $scope.newEmail = $scope.emailData.getReply();

  $scope.closeEmail = function() {
    $state.go("jmail.inbox");
    $scope.emailData.setCurrentEmail(null);
  }

  $scope.sendEmail = function() {
    EmailService.sendEmail();
  }

}]);
