# Test Runner

This sets up mocha, chai, and chai-as-promised for writing test cases. It also
returns a method that allows for running tests easily.

## Installation

To install node-test-runner and save it as a dev dependency:

```
npm install --save-dev github:elrac/node-test-runner
```

## Usage

It is suggested that you make a test folder to hold your test suite then a main
testing file. The actual tests can be in other files in the same directory.

```
var testRunner = require('test-runner');

describe('<your module>', function() {
  var yourModule = require('../<path to your module>');
  testRunner({testObj:yourModule},'testFile1','testFile2');
});

```

and the test files would have

```
exports.runTest = function(yourModule){

}
```
This wrapping function is not needed if you want to to require() items in each
test file.

In your package.json file add
```
"scripts": {
  "test": "mocha test/<your test loader file>"
}
```
then you will be able to run your test cases with
```
npm test
```

test-runner exposes as a global `expect`from chai as well as a global.testing
boolean. The boolean is useful for when you want to export more methods for
testing than you would normally.
