// 1)
// 	1. O(1)
// 	2. O(n)

// 2)
// 	O(1)
// 	Given any value, only 1 action is occuring.

// 3)
// 	O(n^2)
// 	One loop nested within another loop.

// 4)
// 	O(n)
// 	It's linear because it is only bound by the length of the array.

// 5)
// 	O(n)
// 	It's linear because it is only bound by the length of the array.

// 6)
// 	O(n^2)
// 	One loop nested within another loop.

// 7)
// 	O(n)
// 	On the first two iterations, it pushes 0 then 1 into the array. After that, it pushes values of the Fibonacci sequence into the array.

// 8)
// 	O(log(n))
// 	The boundaries of the search gets smaller and smaller with each iteration

// 9)
// 	O(1)

// 10)
// 	O(n)
// 	isPrime() | It checks to see if a given number is divisible by any number between 2 and that number. Aka, it checks to
// 	see if the given number is prime

// 11)
// 	O(n^3)?

// 12)
// 	1.

console.log("counting mf sheep");
const countSheep = num => {
  for (let i = num; i > 0; i--) {
    console.log(`${i}. Another sheep jumped the fence.`);
  }
  console.log(
    "I am sick and tired of these mf sheep jumping over this mf fence!"
  );
};
countSheep(5);

console.log("power calculator");

const powerCalc = (int, exp) => {
  return int ** exp;
};
console.log(powerCalc(4, 6));
// 	2.

// 	3.

// 	4.

// 	5.

// 	6.

// 	7.
