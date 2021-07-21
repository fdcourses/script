
const arr = [];

// ================================================

function MyArrayProtoProto () {
  
}

function MyArrayProto() {
  this.push = function (element) {
    // console.log(arguments);
    this[this.length++] = element;
    return this.length;
  }
}

function MyArray () {
  this.length = 0;
}

MyArray.prototype = new MyArrayProto();

const myArr = new MyArray();
const myArr2 = new MyArray();