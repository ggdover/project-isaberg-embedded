module.exports = {

  // Add testable functions here

  addition : function(num1, num2) {
    return num1 + num2;
  },

  subtraction : function(num1, num2) {
  	if (num1 == null || num2 == null) {
  		throw new TypeError("Parameter can't be null");
  	}

    return num1 - num2;
  }
}