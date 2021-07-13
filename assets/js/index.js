// function expression
const getSumOfTwoNumbers = function (value1, value2) {
  // debugger;

  if (isNaN(value1 - value2)) {
    alert("Incorrect data");

    return null;
  } else {
    const result = value1 + value2;

    alert(result);

    return result;

    alert(result);
  }
};

const result = getSumOfTwoNumbers("test", 15);

console.log(result);
