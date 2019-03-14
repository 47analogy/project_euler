const { mult3And5, fibonacci } = require('./solutions');

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

describe('Tests for fibonacci', () => {
	test('fibonacci is a function', () => {
		expect(typeof fibonacci).toEqual('function');
	});

	test('outputs a number', () => {
		expect(typeof fibonacci(100)).toBe('number');
	});

	test('outputs sum of first 5 even fibonacci numbers', () => {
		expect(fibonacci(5)).toEqual(10);
	});
});
