require('should');

describe('#flati.modules', function() {
	it('should be loaded with Node', function() {
		var flati = require('../src/flati');
		flati.should.be.type('function');
	});

	it('should be loaded globally'/*, function() {
		var fs = require('fs');
		eval(fs.readFileSync(__dirname + '/../src/flati.js').toString());
	}*/);

	it('should be loaded with AMD', function(done) {
		var requirejs = require('requirejs');
		requirejs([__dirname + '/../src/flati'], function(flati) {
			flati.should.be.type('function');
			done();
		});
	});
});