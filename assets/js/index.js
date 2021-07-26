
const myUsers = new MyArray(
  { firstName: "User1", lastName: "Test", age: 20 },
  { firstName: "User2", lastName: "Test", age: 13 },
  { firstName: "User3", lastName: "Test", age: 50 },
  { firstName: "User4", lastName: "Test", age: 7 },
  { firstName: "User5", lastName: "Test", age: 45 },
  { firstName: "User6", lastName: "Test", age: 1 },
  { firstName: "User7", lastName: "Test", age: 415 }
);

const arr = [1,2,3,4,5,6];

const phones = [
  { model: '11', brand: "Apple", price: 150000 },
  {  brand: "motorolla" },
  {  brand: "Google" },
  {  brand: "Meizu" },
  {  brand: "Xiaobao" },
  { model: 'X', brand: "Apple", price: 15000 },
  {  brand: "Huawei" },
  {  brand: "Honor" }
]

const checkBrand = function(brand, targetBrand) { 

  return brand === targetBrand;
}

const callback = function (phone) {
  return checkBrand(phone.brand, "Apple");
}

const applePhones = phones.filter(callback);

const cheapApplePhones = applePhones.filter(function (phone) {
  return phone.price <= 20000;
})