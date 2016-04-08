jmail.factory('EmailService', [ 'Restangular', function(Restangular) {
  var obj = {};

  var _emailData = {
    emails: null,
    currentEmail: null,
    newEmail: { from: null, to: null, subject: null, body: null, time: null },
    requestEmails: function() {
      var emails = [];
      var rawEmails = fake_emails;
      for ( var i = 0; i < rawEmails.length; i++ ) {
        emails.push({
          id: i,
          from: rawEmails[i].from,
          from_email: rawEmails[i].from_email,
          to: null,
          subject: rawEmails[i].subject,
          body: rawEmails[i].body.body_raw,
          date: new Date(rawEmails[i].date),
        });
      }

      this.emails = emails;

      // Restangular.all('emails').getList()
      // .then( function( rawEmails ) {
      //   }
      // );
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

    getNewEmail: function() {
      return this.newEmail;
    },

    resetNewEmail: function() {
      this.newEmail = { id: 0, from: "Me", to: null, subject: null, body: null, time: null };
    },

  };

  obj.getEmailData = function() {
    return _emailData;
  };

  obj.sendEmail = function() {
    Restangular.all("emails").post(_emailData.newEmail)
    .then( function( responseEmail ) {
      console.log( responseEmail );
    }, function( error ) {
      console.log( error );
    });
  }

  return obj;
}]);
