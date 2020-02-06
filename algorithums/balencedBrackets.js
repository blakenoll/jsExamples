const map = {
  "}": "{",
  "]": "[",
  ")": "("
};

const openBrackets = ["[", "{", "("];

function isBalanced(string) {
  const stack = [];
  for (l of string) {
    if (openBrackets.includes(l)) {
      stack.push(l);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === map[l]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}
