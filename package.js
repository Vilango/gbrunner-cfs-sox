Package.describe({
  version: '0.0.1',
  summary: "Adds `sox` to scope with the ability to perform audio manipulation"
});

Npm.depends({
  sox: "0.1.0"
});

//also requires that you install the sox package on your server
Package.on_use(function(api) {
  api.add_files('sox.js', 'server');
  api.export('sox');
});

Package.on_test(function(api) {
  api.use(['cfs-sox', 'test-helpers', 'tinytest'], 'server');
  api.add_files('tests/server-tests.js', 'server');
});
