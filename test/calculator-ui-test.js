QUnit.module( "CalculatorUI", {
  setup: function() {
    calculator.reset();
  },
  teardown: function() {
    calculatorUI.resetCalculator();
  }
});

QUnit.test( "UI Addition", function( assert ) {
	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('add');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");

	$('#calculatorInput').val(12);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '24', "Textbox value was 12 as expected");
});

QUnit.test( "UI Multiple Addition", function( assert ) {
	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('add');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");

	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('add');
	assert.equal($('#calculatorInput').val(), '24', "Textbox has 24 as expected");

	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('add');
	assert.equal($('#calculatorInput').val(), '36', "Textbox has 36 as expected");

	$('#calculatorInput').val(12);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '48', "Textbox value was 48 as expected");
});

QUnit.test( "UI Subtraction", function( assert ) {
	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('subtract');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");
	
	$('#calculatorInput').val(12);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '0', "Textbox value was 0 as expected");
});

QUnit.test( "UI Multiple Subtraction", function( assert ) {
	$('#calculatorInput').val(100);
	calculatorUI.operatorClick('subtract');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");

	$('#calculatorInput').val(10);
	calculatorUI.operatorClick('subtract');
	assert.equal($('#calculatorInput').val(), '90', "Textbox has 90 as expected");

	$('#calculatorInput').val(10);
	calculatorUI.operatorClick('subtract');
	assert.equal($('#calculatorInput').val(), '80', "Textbox has 80 as expected");

	$('#calculatorInput').val(10);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '70', "Textbox value was 70 as expected");
});

QUnit.test( "UI Multiplication", function( assert ) {
	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('multiply');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");
	
	$('#calculatorInput').val(2);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '24', "Textbox value was 24 as expected");
});

QUnit.test( "UI Division", function( assert ) {
	$('#calculatorInput').val(12);
	calculatorUI.operatorClick('divide');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");
	
	$('#calculatorInput').val(2);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '6', "Textbox value was 6 as expected");
});

QUnit.test( "UI Multiple Division", function( assert ) {
	$('#calculatorInput').val(100);
	calculatorUI.operatorClick('divide');
	assert.equal($('#calculatorInput').val(), '', "Textbox cleared");

	$('#calculatorInput').val(10);
	calculatorUI.operatorClick('divide');
	assert.equal($('#calculatorInput').val(), '10', "Textbox has 10 as expected");

	$('#calculatorInput').val(10);
	calculatorUI.operatorClick('divide');
	assert.equal($('#calculatorInput').val(), '1', "Textbox has 1 as expected");

	$('#calculatorInput').val(10);
	calculatorUI.equalsClick();
	assert.equal($('#calculatorInput').val(), '0.1', "Textbox value was 0.1 as expected");
});