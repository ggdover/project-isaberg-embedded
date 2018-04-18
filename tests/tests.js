describe("Addition test", function() {

	var dut = require("../src/main");

	it("should be able to add two positive numbers", function() {
		var sum = dut.addition(2, 4);

		expect(sum).toEqual(6);
	});

	it("should throw exception when passing null", function() {
		//expect(dut.addition).toThrowError("")
	});
});