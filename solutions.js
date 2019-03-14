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

module.exports = { mult3And5, fibonacci };
