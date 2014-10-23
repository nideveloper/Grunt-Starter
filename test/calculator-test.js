QUnit.module( "Calculator", {
  setup: function() {
    calculator.reset();
  },
  teardown: function() {
    // clean up after each test
  }
});

QUnit.test( "Addition", function( assert ) {
	var response = calculator.add(2, 2);
  	assert.equal(response, 4, "2 + 2 does = 4 ");
});

QUnit.test( "Multiple Additions", function( assert ) {
	calculator.add(2, 2);
	calculator.add(6);
	calculator.add(5);
	var response = calculator.getTotal();
  	assert.equal(response, 15, "Multiple Additions are working as expected ");
});

QUnit.test( "Subtraction", function( assert ) {
	var response = calculator.subtract(2, 2);
  	assert.equal(response, 0, "2 - 2 does = 0 ");
});

QUnit.test( "Multiple Subtraction", function( assert ) {
	calculator.subtract(15, 2);
	calculator.subtract(3);
	calculator.subtract(5);
	var response = calculator.getTotal();
  	assert.equal(response, 5, "Multiple Subtraction working as expected");
});

QUnit.test( "Multiply", function( assert ) {
	var response = calculator.multiply(2, 2);
  	assert.equal(response, 4, "2 x 2 does = 4 ");
});

QUnit.test( "Multiple Multiply", function( assert ) {
	calculator.multiply(2, 2);
	calculator.multiply(2);
	calculator.multiply(2);
	var response = calculator.getTotal();
  	assert.equal(response, 16, "2 ^ 4 does = 16 ");
});

QUnit.test( "Divide", function( assert ) {
	var response = calculator.divide(2, 2);
  	assert.equal(response, 1, "2 / 2 does = 1 ");
});

QUnit.test( "Multiple Divide", function( assert ) {
	calculator.divide(40, 2);
	calculator.divide(2);
	calculator.divide(2);
	var response = calculator.getTotal();
  	assert.equal(response, 5, "40 / 2 / 2 / 2 does = 5 ");
});

QUnit.test( "Reset", function( assert ) {
	calculator.add(2, 2);
	calculator.add(6);
	calculator.add(5);
	calculator.reset();
	var response = calculator.getTotal();
  	assert.equal(response, 0, "Reset is working as expected ");
});

QUnit.test( "UI Process", function( assert ) {
	calculator.setTotal(6);
	calculator.setCurrentOperation('add');
	var response = calculator.calculateTotal(6);
  	assert.equal(response, 12, "Add Pass");

  	calculator.reset();
  	calculator.setTotal(6);
	calculator.setCurrentOperation('subtract');
	response = calculator.calculateTotal(6);
  	assert.equal(response, 0, "Subtract Pass");

  	calculator.reset();
  	calculator.setTotal(6);
	calculator.setCurrentOperation('multiply');
	response = calculator.calculateTotal(6);
  	assert.equal(response, 36, "Multiply Pass");

  	calculator.reset();
  	calculator.setTotal(6);
	calculator.setCurrentOperation('divide');
	response = calculator.calculateTotal(6);
  	assert.equal(response, 1, "Divide Pass");
});
