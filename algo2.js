let str = "()(){}{}[][]";
let str2 = ")(}{}{][";

function validPunc() {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
      continue;
    }

    if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
      continue;
    }
    if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
      continue;
    }
    if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
      continue;
    }
    if (stack.length === 0) return true;
    else return false;
  }

 
}
validPunc();
