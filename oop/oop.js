var Calc = {
  a: 5,
  b: 7,
  read: function() {
    console.log(this.a, this.b);
  },

  sum: function() {
    return this.a + this.b;
  },

  diff: function() {
    return this.a - this.b;
  },

  multiply: function() {
    return this.a * this.b;
  },

  divide: function() {
    return this.a / this.b;
  }
};

console.log(Calc.read());
//console.log(read.call());
//console.log((Calc).sum());
//console.log(sum.call(Calc));
//console.log((Calc).diff());
//console.log(diff.apply(Calc));
//console.log(Calc.multiply());
console.log(multiply.bind(Calc));
//console.log(Calc.divide());
