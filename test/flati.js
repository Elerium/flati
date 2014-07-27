require('should');
var flati = require('../src/flati');

describe('#flati', function() {
	var isColor = function(color) {
		color.should.be.an.Object;
		color.should.have.properties(['r', 'g', 'b']);
	};

	it('should return RGB value', function() {
		isColor(flati('foo', 42));
	});

	it('should generate different colors with different seed', function() {
		var generator1 = flati.bind(null, 'foo');
		var generator2 = flati.bind(null, 'bar');

		for(var i = 0; i < 100; i++) {
			var color1 = generator1(i);
			var color2 = generator2(i);
			isColor(color1);
			color1.should.not.be.eql(color2);
		}
	});

	it('should generate same colors with same seed', function() {
		var generator1 = flati.bind(null, 'foo');
		var generator2 = flati.bind(null, 'foo');

		for(var i = 0; i < 100; i++) {
			var color1 = generator1(i);
			var color2 = generator2(i);
			isColor(color1);
			color1.should.be.eql(color2);
		}
	});
});