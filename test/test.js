/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};
if (typeof window === 'object') {
  // Run tests in browser
  assert = chai.assert;
  expect = chai.expect;
  mocha.setup('bdd');
  testItems = {
    // Variables
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,

  };
} else {
  // Run tests in Node.js
  assert = require('assert');
  expect = require('chai').expect;
  testItems = require('../script.js');
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {

  describe(`highScore variable created and assigned a value of 29`, function () {
    it(`highScore variable created and assigned a value of 29`, function () {
      let { highScore } = testItems;
      expect(highScore).to.exist;
      expect(highScore).to.be.a('number');
      expect(highScore).to.equal(29);
    });
  });
  
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
  console.log('blahblah')
    mocha.run();
}

// ---
// | Base Learning Objectives | Complete? |
// | --- | :---: |
// | Source javascript files into index.html | no |
// | Create a variable and set its value | no |
// | Arrays: create an array and set initial values | no |
// | Arrays: add items to an array| no |
// | Arrays: remove an item from an array| no |
// | Functions: call the `sumTiles` function and pass an argument | no |
// | Functions: function returns total tiles score | no |
// | Functions: returned value assigned to `myScore` variable | no |
// | Loops: write a loop that totals properties from objects within an array | no |
// | Conditionals: compare numbers and determine which is higher  | no |
// ---
