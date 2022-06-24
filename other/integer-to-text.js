// Create a function that converts a given number between 1–10 into words

const map = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
const _convertIntegerToText = num => map[num]

console.log('6  =>', _convertIntegerToText(6))
console.log('---------------------------');

// The requirements have changed. We now want to use this function to convert numbers between 1–1000 into words

const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const convertIntegerToText = num => {
  if (num < 20) return ONES[num] ?? TEENS[num - 10];

  if (num < 100) return `${TENS[Math.floor(num / 10)]} ${convertIntegerToText(num % 10)}`;

  if (num < 1000) return `${ONES[Math.floor(num / 100)]} hundred ${convertIntegerToText(num % 100)}`;

  throw new Error('invalid number');
}

console.log('1  =>', convertIntegerToText(1))
console.log('7  =>', convertIntegerToText(7))
console.log('77 =>', convertIntegerToText(77))
console.log('43 =>', convertIntegerToText(43))
console.log('90 =>', convertIntegerToText(90))
console.log('12 =>', convertIntegerToText(12))
console.log('100 =>', convertIntegerToText(100))
console.log('101 =>', convertIntegerToText(101))
console.log('999 =>', convertIntegerToText(999))
console.log('892 =>', convertIntegerToText(892))
