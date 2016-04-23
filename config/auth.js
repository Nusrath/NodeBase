// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1740932829486286',
        'clientSecret'  : 'f30dd93d24a77c97118289949fff792b',
        'callbackURL'   : 'http://seedbox.co.za:3000/auth/facebook/callback',
        'profileFields' : ['id', 'emails', 'name']
    },

    'twitterAuth' : {
        'consumerKey'       : 'wYcuaNPZWvc6kwJiPIVarIXn4',
        'consumerSecret'    : 'y80X2AXZ75kBb7oqlCst8AWaeSbUkruq4asxOzt4h8xcP05AZ4',
        'callbackURL'       : 'http://seedbox.co.za:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};