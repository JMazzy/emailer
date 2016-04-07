var jmail = angular.module('jmail', [ 'ui.router',
                                        'restangular',
                                        'Devise',
                                        'xeditable',
                                        'angularModalService']);

jmail.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

jmail.config( ['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);

jmail.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider

    .state("jmail", {
      url: "/",
      template: "<div ui-view></div>"
    })
    .state('jmail.inbox', {
      url: 'inbox',
      templateUrl: 'templates/inbox.html',
      controller: 'EmailCtrl'
    })

    $urlRouterProvider.otherwise('jmail.inbox');

  }]);