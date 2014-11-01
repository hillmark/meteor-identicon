Package.describe({
  name: 'hillmark:meteor-identicon',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
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
