jmail.factory('EmailService', [ 'Restangular', function(Restangular) {
  var obj = {};

  var _emailData = {
    emails: [{  from: "Fake Sender",
                to: "Fake Recipient",
                subject:"Fake Subject",
                body: "Fake Body",
                time: new Date(2016, 1, 1, 1, 1)}],
    currentEmail: null,
    requestEmails: function() {
      this.emails = Restangular.all('emails')
      .get()
      .$object;
    },
    getEmails: function() {
      return this.emails;
    },
    setCurrentEmail: function(email) {
      this.currentEmail = email;
    },
    getCurrentEmail: function() {
      return this.currentEmail;
    }
  };

  obj.getEmailData = function() {
    return _emailData;
  };

  return obj;
}]);
