jmail.controller( 'ComposeCtrl', ['$scope', '$state', '$stateParams', 'Restangular', 'EmailService', function($scope, $state, $stateParams, Restangular, EmailService){

  $scope.emailData = EmailService.getEmailData();

  $scope.newEmail = $scope.emailData.getNewEmail();

  $scope.sendEmail = function() {
    EmailService.sendEmail();
  }

}]);
