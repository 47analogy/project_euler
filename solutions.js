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

module.exports = { mult3And5 };
