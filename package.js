Package.describe({
  version: '0.0.1',
  summary: "Adds `sox` to scope with the ability to perform audio manipulation",
  git: "https://github.com/Vilango/gbrunner-cfs-sox"
});

Npm.depends({
  sox: "0.1.0"
});

//also requires that you install the sox package on your server
Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.add_files('gbrunner:cfs-sox.js', 'server');
  api.export('sox');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gbrunner:cfs-sox');
  api.addFiles('gbrunner:cfs-sox-tests.js');
});

