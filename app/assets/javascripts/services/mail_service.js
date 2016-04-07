jmail.factory('EmailService', [ 'Restangular', function(Restangular) {
  var obj = {};

  var _emailData = {
    emails: [],
    requestEmails: function() {
      this.emails = Restangular.all('emails')
      .get()
      .$object;
    },
    getEmails: function() {
      return this.emails;
    }
  };

  obj.getEmailData = function() {
    return _emailData;
  };

  return obj;
}]);
