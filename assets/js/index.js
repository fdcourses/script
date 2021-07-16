
// Create
const monitor = {
  width: '70sm',
  color: 'black',
  manufacturer: 'Samsung',
  isOn: true,
  price: 500,
  switchOff: function () {
    alert('Monitor switched off');
  }, // метод
  switchOn: function () {
    alert('Monitor swithecd on')
  }
} // литеральная запись обьекта

 

// Read
console.log(monitor);

// Upadate
monitor.isOn = false;


// Delete
delete monitor.width;

console.log(monitor.width);

console.log(monitor);