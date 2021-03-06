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

// Largest palindrome product

// loop through products of numbers decreasing the numbers on every iteration
// if the product length is even, check if it's a palidrome
// if product is a palidrome, place into an array
// get the highest number in the array and return it

const largePalidrome = (num1, num2) => {
	let gp;
	const prodArr = [];

	for (let i = num1; i > 0; i--) {
		for (let j = num2; j > 0; j--) {
			let prod = i * j;
			if (prod.toString().length % 2 === 0) {
				// check for palidrome by reversing and comparing number
				let numRev = prod
					.toString()
					.split('')
					.reverse()
					.join('');

				if (Number(prod) === Number(numRev)) {
					prodArr.push(prod);
					gp = Math.max(...prodArr);
				}
			}
		}
	}
	return gp;
};

// Smallest multiple

// create array from largest to smallest number
// multiply first 2 numbers of array, set it as 'lcm' and loop (outer) until end of array
// start inner loop at 3rd number and check if 'lcm' can be divided by every number
// if it can't, increase the 'lcm' value by a factor and continue with the outer loop
// return the lcm

const smallMult = num => {
	const numArr = [];
	let j = 2;
	let k = 1;

	for (let i = num; i >= 1; i--) {
		numArr.push(i);
	}

	while (j !== numArr.length) {
		lcm = numArr[0] * k * numArr[1];

		for (j = 2; j < numArr.length; j++) {
			if (lcm % numArr[j] !== 0) break;
		}
		k++;
	}
	return lcm;
};

module.exports = {
	mult3And5,
	fibonacci,
	largePrimeFactor,
	largePalidrome,
	smallMult
};
