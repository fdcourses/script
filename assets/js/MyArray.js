function MyArrayProto() {

  this.push = function () {
    for(let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }

    return this.length;
  }
  
  this.pop = function () {
  
  }
  
  this.shift = function () {
  
  }
  
  this.unshift = function () {
    
  }
  
  this.concat = function () {
    
  }
}

function MyArray () {
  this.length = 0;

}

const myArrProto = new MyArrayProto();

MyArray.prototype = myArrProto;

const myArr = new MyArray();
const myArr2 = new MyArray();