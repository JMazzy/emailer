jmail.directive('mailDirective', function(){
    return {
        templateUrl: "templates/mailDirective.html",
        restrict: "A",
        scope: {
          email: "="
        },
    };
});
