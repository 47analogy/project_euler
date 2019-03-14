// Multiples of 3 and 5
// Find the sum of all the multiples of 3 or 5 below 1000

// loop thru numbers from 1 to num (1000)
// if number is a multiple of 3 or 5
// place into sum array
// sum the array
const mult3And5 = num => {
	let sum = [];

	// don't care about 0
	for (let i = 1; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum.push(i);
		}
	}
	sum = sum.reduce((tot, num) => {
		return tot + num;
	});
	return sum;
};

//Even Fibonacci numbers

// loop through numbers (4,000,000)
// add the current number to the previous num
// if the sum is even, add to array
// sum the array

const fibonacci = num => {
	let fibAll = [0, 1];
	let fibSum = [];

	for (let i = 2; i < num + 2; i++) {
		fibAll.push(fibAll[i - 2] + fibAll[i - 1]);
	}
	fibAll.slice(2);

	for (let j = 0; j < fibAll.length; j++) {
		if (fibAll[j] % 2 === 0) {
			fibSum.push(fibAll[j]);
		}
	}

	fibSum = fibSum.reduce((sum, cur) => {
		return sum + cur;
	});

	return fibSum;
};

// Largest prime factor

// while num is divisible by 2
// if num is divisible by 2, push quotient to array of factors
// otherwise increase divisor by 1
// if num is divisible by divisor, push quotient to array of factors
// continue loop until num is greater than or equal to divisor squared
// return last element in array
const largePrimeFactor = num => {
	let i = 2;
	const factorArr = [];
	let gpf;

	do {
		if (num % i === 0) {
			num = num / i;
			factorArr.push(num);
		} else {
			i += 1;
		}
	} while (num >= Math.pow(i, 2));

	gpf = factorArr.pop();
	return gpf;
};

module.exports = { mult3And5, fibonacci, largePrimeFactor };
