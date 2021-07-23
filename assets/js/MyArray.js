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

  this.some = function (func) {
    for(let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if(result) {
        return true;
      }
    }
    
    return false;
  }

  this.every = function (func) {
    for(let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if(!result) {
        return false;
      }
    }
    
    return true;
  }
  
}

function MyArray () {
  this.length = 0;

  for(let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

const myArrProto = new MyArrayProto();

MyArray.prototype = myArrProto;

const myArr = new MyArray(1,2,3,'test');
// const myArr2 = new MyArray();