jmail.factory('EmailService', [ 'Restangular', function(Restangular) {
  var obj = {};

  var _emailData = {
    emails: null,
    currentEmail: null,
    reply: { from: null, to: null, subject: null, body: null, time: null },
    requestEmails: function() {
      // var rawEmails = Restangular.all('emails').get().$object;
      var rawEmails = fake_emails;
      var emails = [];
      for ( var i = 0; i < rawEmails.length; i++ ) {
        emails[i] = {
          id: i,
          from: rawEmails[i].from,
          from_email: rawEmails[i].from_email,
          to: null,
          subject: rawEmails[i].subject,
          body: rawEmails[i].body.body_raw,
          date: new Date(rawEmails[i].date),
        };
      }
      this.emails = emails;
    },
    getEmails: function() {
      return this.emails;
    },
    setCurrentEmail: function(email) {
      this.currentEmail = email;
    },
    getCurrentEmail: function() {
      return this.currentEmail;
    },
    emailFromID: function(id) {
      for ( var i = 0; i < this.emails.length; i++ ) {
        if ( this.emails[i].id === id ) {
          this.setCurrentEmail( this.emails[i] );
        }
      }
    },
    getReply: function() {
      return this.reply;
    },
    resetReply: function() {
      this.reply = { id: 0, from: "Me", to: null, subject: null, body: null, time: null };
    },
  };

  obj.getEmailData = function() {
    return _emailData;
  };

  return obj;
}]);
