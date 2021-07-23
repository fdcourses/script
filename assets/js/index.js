
function isAdult(user) {
  return user.age >= 18;
}

const someVerdict = users.some(isAdult);

const everyVerdict = users.every(isAdult);

const myUsers = new MyArray(
  { firstName: "User2", lastName: "Test", age: 13 },
  { firstName: "User1", lastName: "Test", age: 20 },
  { firstName: "User3", lastName: "Test", age: 50 },
  { firstName: "User4", lastName: "Test", age: 77 },
  { firstName: "User5", lastName: "Test", age: 45 },
  { firstName: "User6", lastName: "Test", age: 19 },
  { firstName: "User7", lastName: "Test", age: 415 }
);
