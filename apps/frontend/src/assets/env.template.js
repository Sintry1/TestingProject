// This file is used by the dockerfile and replaces the normal env.js with values obtained from the environment
(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['sentryDsn'] = '${FRONTEND_SENTRY_DSN}';
  window['env']['sentryTunnel'] = '${FRONTEND_SENTRY_TUNNEL}';
  window['env']['apiUrl'] = '${API_URL}';
})(this);
