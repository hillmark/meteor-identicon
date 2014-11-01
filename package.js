Package.describe({
  name: 'hillmark:meteor-identicon',
  summary: 'Provides a wrapper around the identicon.js lib and a simple template helper.',
  version: '1.0.0',
  git: 'https://github.com/hillmark/meteor-identicon'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['blaze'], 'client');
  api.addFiles('./pnglib.js', 'client');
  api.addFiles('./identicon.js', 'client');
  api.addFiles('hillmark:meteor-identicon.js');
  api.export('Identicon', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hillmark:meteor-identicon');
  api.addFiles('hillmark:meteor-identicon-tests.js');
});
