jmail.controller( 'InboxCtrl', ['$scope', '$state', '$stateParams', 'Restangular', 'EmailService', function($scope, $state, $stateParams, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();

  $scope.emails = $scope.emailData.getEmails();

  $scope.openEmail = function(email) {
    $scope.emailData.setCurrentEmail(email);
    $state.go("jmail.email", { id: email.id });
  }

}]);
