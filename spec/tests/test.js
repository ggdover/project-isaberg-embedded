var dut = require("../../src/functions.js");

describe("Addition test - ", function() {

	it("should be able to add two positive numbers", function() {
		var sum = dut.addition(2, 4);

		expect(sum).toEqual(6);
	});

	// Test that will fail..
	it("should throw exception when passing null", function() {
		expect(function(){dut.addition(null, 3)}).toThrow();
	});
});

describe("Subtraction test - ", function() {

	it("should throw exception when passing null", function() {
		expect(function(){dut.subtraction(null, 3)}).toThrow();
	});
});