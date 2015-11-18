/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'student-org-site',
    authenticationRoute: 'signin',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'self' ",
      'script-src': "'self' 'unsafe-inline'", // Allow scripts from self only, this prevents injection and XSS attacks, remove warning message 
      'font-src': "'self' http: https:", // Allow fonts to be loaded from self or any http/https source
      'connect-src': "'self' ", // Allow data (ajax/websocket) from self only (The same IP as this app)
      'img-src': "'self' http: https:", //Allow images from any http/https server
      'style-src': "'self' https://fonts.googleapis.com/", // Allow inline styles and loaded CSS from same IP
      'media-src': "'self' "
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://localhost:8000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'iasc8080-02.ist.unomaha.edu';
  }

  return ENV;
};
