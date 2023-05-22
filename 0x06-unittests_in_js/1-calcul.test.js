const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 3.8, 4.2), 8);
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
      assert.strictEqual(calculateNumber('SUM', -3.8, -4.2), -8);
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 4);
      assert.strictEqual(calculateNumber('SUM', 3.5, 4.5), 8);
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -4);
      assert.strictEqual(calculateNumber('SUM', -3.5, -4.5), -8);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.8, 4.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.6), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', -3.8, -4.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 4.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -3.5, -4.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 3), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
      assert.strictEqual(calculateNumber('DIVIDE', -10, 3), -

