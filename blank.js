// String.prototype.blank =

String.prototype.blank = function() {
  return (this.length === 0 || /^\s*$/.test(this));


String.prototype.blank2 = function() {
  return !!(this.match(/^\s*$/g));
}
}

//console.log("fo   obar".blank());

//console.log("".blank());              // true



Array.prototype.last = function() {
  return this.slice(-1)[0];
}

let a = [42, 8, 17, 99];

console.log(a.last());
