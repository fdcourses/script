
const arr = [-100,5,30,45,60,1];

// ================================================

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
  }

function double (number) {
  const result = number * 2;
  console.log(result);
  return result;
}

arr.forEach(double);

arr.forEach(function (number) {
  console.log(number * 2);
});

arr.forEach(function (elem) {
  console.log(elem);
});

const users = [
  { firstName: "User1", lastName: "Test", age: 20 },
  { firstName: "User2", lastName: "Test", age: 13 },
  { firstName: "User3", lastName: "Test", age: 50 },
  { firstName: "User4", lastName: "Test", age: 77 },
  { firstName: "User5", lastName: "Test", age: 45 },
  { firstName: "User6", lastName: "Test", age: 19 },
  { firstName: "User7", lastName: "Test", age: 415 },
];

function greet(user) {
  const greeting = `Привет ${user.firstName} ${user.lastName}`;
  console.log(greeting);
  return greeting;
  }

users.forEach(greet);

// foreach  без foreach
// for(let i = 0; i < users.length;i++) {
//   greet(users[i]);
// }

}



