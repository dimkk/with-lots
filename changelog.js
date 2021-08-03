var conventionalChangelog = require('conventional-changelog');
var fs = require('fs');
var writeStream = fs.createWriteStream('./changelog.txt');

conventionalChangelog({
  preset: 'react',
}).pipe(writeStream); // or any writable stream
