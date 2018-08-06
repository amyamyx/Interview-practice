// Write a function, fibs(num) which returns the first n elements 
// from the fibonnacci sequence, given n.

// Solve it both iteratively and recursively.

function fibs(num) {
  let fib = [1, 1];
  let newEl, l;

  while (fib.length < num) {
    l = fib.length;
    newEl = fib[l - 1] + fib[l - 2]
    fib.push(newEl);
  };

  return fib.slice(0, num);
};

function fibsRec(num) {
  if (num <= 2) return [1, 1].slice(0, num);

  let prev = fibsRec(num - 1);
  let newEl = prev[num - 2] + prev[num - 3];

  return prev.concat([newEl]);
};


console.log(fibsRec(8));
console.log(fibs(8));