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

	it('should ignore i parameter', function() {
		isColor(flati('foobar'));
	});

	it('should convert to string', function() {
		flati('foo', 42).toString().should.match(/rgb\([0-9]+, [0-9]+, [0-9]+\)/);
	});

	it('should generate different colors with different seed', function() {
		var generator1 = flati.bind(null, 'foo');
		var generator2 = flati.bind(null, 'bar');

		for(var i = 0; i < 100; i++) {
			var c1 = generator1(i);
			isColor(c1);
			var c2 = generator2(i);
			(c1.r !== c2.r || c1.g !== c2.g || c1.b !== c2.b).should.be.true;
		}
	});

	it('should generate same colors with same seed', function() {
		var generator1 = flati.bind(null, 'foo');
		var generator2 = flati.bind(null, 'foo');

		for(var i = 0; i < 100; i++) {
			var c1 = generator1(i);
			isColor(c1);
			var c2 = generator2(i);
			(c1.r === c2.r && c1.g === c2.g && c1.b === c2.b).should.be.true;
		}
	});
});