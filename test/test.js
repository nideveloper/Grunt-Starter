QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "This has passed the test!" );
});

QUnit.test( "Test function", function( assert ) {
	var response = test.function1("Hello ", "world!");
  	assert.ok(response == "Hello world!", "Function1 operating as expected! It returned - " + response );
});