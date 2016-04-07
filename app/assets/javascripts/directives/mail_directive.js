jmail.directive('mailDirective', function(){
    return {
        templateUrl: "templates/mail_directive.html",
        restrict: "A",
        scope: {
          email: "="
        },
    };
});
