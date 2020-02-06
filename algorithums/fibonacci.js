function fibonacciRecursive(number) {
  if (number == 2) {
    return 1;
  }
  if (number == 1) {
    return 0;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log("recuresive", fibonacciRecursive(5));

function fibonacciIterative(number) {
  let prevprev = 0;
  let prev = 0;
  let current = 1;
  for (i = 0; i < number; i++) {
    prevprev = prev;
    prev = current;
    current = prevprev + prev;
  }
  return current;
}

console.log("iterative", fibonacciIterative(5));
