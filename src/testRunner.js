var path = require('path');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

global.expect = expect;
global.testing = true;

/*
* runTests([object options],string testFile|array testFiles,[string testFile|array testFiles])
*
* @param options Object options for the test runner
*   options.directory string default "test" The directory that will be searched for test files
*   options.testObj An object to be passed in as the first parameter to the runTest funcion
* @param testFile string A filename of a test to run
* @param testFiles array An array of filenames
*/
var runTests = function(){
    var args = Array.prototype.slice.call(arguments);

    var options={
      directory:'test',
      baseDir:process.cwd()
    };

    if(typeof args[0] != 'string'){
      var opts = args.shift();
      for(n in opts){
        options[n] = opts[n];
      }
    }

    var files = args.reduce((a,b) => a.concat(b) , []);

    var testDir = path.join(options.baseDir,options.directory);

    files.forEach( function(file) {
      var test = require(path.join(testDir,file));
      if(test.runTest){
        test.runTest(options.testObj,options)
      }
    });

}

runTests.chai = chai;

module.exports = runTests;
