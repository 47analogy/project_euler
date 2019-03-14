const { mult3And5 } = require('./solutions');

describe('Tests for mult3And5', () => {
	test('mult3And5 is a function', () => {
		expect(typeof mult3And5).toEqual('function');
	});

	test('outputs a number', () => {
		expect(typeof mult3And5(1000)).toBe('number');
	});

	test('sums multiples of 3 and 5', () => {
		expect(mult3And5(10)).toEqual(23);
	});
});
