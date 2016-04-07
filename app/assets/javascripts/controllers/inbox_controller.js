jmail.controller( 'InboxCtrl', ['$scope', '$state', 'Restangular', 'EmailService', function($scope, $state, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();

  $scope.emails = $scope.emailData.getEmails();

  $scope.email = $scope.emailData.getCurrentEmail();

  $scope.openEmail = function(email) {
    $scope.emailData.setCurrentEmail(email);
    $state.go("jmail.email");
  }

  $scope.closeEmail = function() {
    $state.go("jmail.inbox");
    $scope.emailData.setCurrentEmail(null);
  }

}]);
