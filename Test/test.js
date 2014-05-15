var expect = require("chai").expect;
var main = require("../public/scripts/main.js");

describe("main", function () {
	describe("#screenUp", function() {
		var lap = main.Laptop();
		main.screenUp(lt);
		expect(lap.screenSize()).to.equal(15);
	});
});
