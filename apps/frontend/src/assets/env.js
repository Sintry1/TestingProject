(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['environment'] = 'DEVELOPMENT';
  window['env']['sentryDsn'] = '';
  window['env']['sentryTunnel'] = null;
  window['env']['apiUrl'] = 'http://localhost:3333';
})(this);
