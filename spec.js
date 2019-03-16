const {
	mult3And5,
	fibonacci,
	largePrimeFactor,
	largePalidrome,
	smallMult
} = require('./solutions');

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

describe('Tests for largePrimeFactor', () => {
	test('largePrimeFactor is a function', () => {
		expect(typeof largePrimeFactor).toEqual('function');
	});

	test('outputs a number', () => {
		expect(typeof largePrimeFactor(1000)).toBe('number');
	});

	test('outputs largest prime factor', () => {
		expect(largePrimeFactor(13195)).toEqual(29);
	});
});

describe('Tests for largePalidrome', () => {
	test('largePalidrome is a function', () => {
		expect(typeof largePalidrome).toEqual('function');
	});

	test('outputs a number', () => {
		expect(typeof largePalidrome(99, 99)).toBe('number');
	});

	test('outputs largest palidrome', () => {
		expect(largePalidrome(99, 99)).toEqual(9009);
	});
});

describe('Tests for smallMult', () => {
	test('smallMult is a function', () => {
		expect(typeof largePalidrome).toEqual('function');
	});

	test('outputs a number', () => {
		expect(typeof smallMult(10)).toBe('number');
	});

	test('outputs smallMult', () => {
		expect(smallMult(10)).toEqual(2520);
	});
});
