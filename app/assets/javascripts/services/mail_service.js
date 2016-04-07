jmail.factory('EmailService', [ 'Restangular', function(Restangular) {
  var obj = {};

  var _emailData = {
    emails: [{  id: 543,
                from: "Fake Sender",
                to: "Fake Recipient",
                subject:"Fake Subject",
                body: "Fake Body",
                time: new Date(2016, 1, 1, 1, 1)}],
    currentEmail: null,
    reply: { id: 544, from: "Me", to: null, subject: null, body: null, time: null },
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
