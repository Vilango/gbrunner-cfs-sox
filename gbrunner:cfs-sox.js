//wrap sox() object with an object that exposes the same methods, with the addition of a
//.save() method that overwrites the FS.File's .buffer with the result

var nodesox = Npm.require('sox');
var path = Npm.require('path');
var fs = Npm.require('fs');

sox = function() {
  throw new Error('gbrunner:cfs-sox could not find "sox"');
};

var foundSox = false;

// Split the path by : or ;
// XXX: windows is not tested
var binaryPaths = process.env['PATH'].split(/:|;/);

// XXX: we should properly check if we can access the os temp folder - since
// sox binaries are using this and therefor may fail?

// XXX: we could push extra paths if the `sox` library check stuff like:
// $MAGIC_HOME The current version does not check there
// $MAGICK_HOME (GraphicsMagick docs)

// We check to see if we can find binaries
for (var i = 0; i < binaryPaths.length; i++) {
  var binPath = binaryPaths[i];

  // If we have not found GraphicsMagic
  if (!foundSox) {
    // Init
    var soxPath = path.join(binPath, 'sox');
    var soxExePath = path.join(binPath, 'sox.exe');

    // Check to see if binary found
    foundSox = fs.existsSync(soxPath) || fs.existsSync(soxExePath);

    if (foundSox) console.log('=> sox found');
  }
}


if (!foundSox) {
  console.warn(
'WARNING:\n' +
'cfs:sox could not find "sox" on the system.\n' +
'\n' +
'I just checked PATH to see if I could find the sox\n' +
'unix/mac os/windows binaries on your system, I failed.\n' +
'\n' +
'Why:\n' +
'1. I may be blind or naive, help making me smarter\n' +
'2. You havent added the path to the binaries\n' +
'3. You havent actually installed sox\n' +
'\n' +
'*** Make sure "$PATH" environment is configured "PATH:/path/to/binaries" ***\n' +
'\n' +
'Installation hints:\n' +
'* Mac OS X "brew install sox"\n' +
'* Linux download rpm or use packagemanager\n' +
'* Centos "yum install sox"' +
'* Windows download the installer and run (untested)');

  sox.isAvailable = false;

} else {
  // Rig the sox scope

  sox = nodesox;

  sox.isAvailable = true;
}
