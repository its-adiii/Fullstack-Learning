/*function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {

  yaha jo 'data' use hua hai,that can be any other word.....like 'info',etc. basically its not some datatype that needs to be declared first..
  just states the arg

  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const value = sum(1,2); */


function sum(num1, num2,fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1,2,displayResultPassive)

//This concept is called callbacks