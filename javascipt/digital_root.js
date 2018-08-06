// Write a method, digital_root(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". Do not use string conversion within your method.

//string conversion
// function digitalRoot(num) {
//   if (num < 10) return num

//   let digits = num.toString().split("").map(ch => parseInt(ch));
//   let sum = 0;

//   digits.forEach(digit => {
//     sum += digit;
//   });

//   return digitalRoot(sum);
// }

function digitalRoot(num) {
  if (num < 10) return num;

  let i = 0;
  let sum = 0;

  while (10 ** i <= num) {
    sum += parseInt(num % (10 ** (i + 1)) / (10 ** i));
    i ++;
  };

  return digitalRoot(sum);
};
console.log(digitalRoot(193));
