let a = [8, 17, 42, 99, 0 , -88];

a.sort(function(a, b) { return a - b; }).forEach(function(character) {
  console.log(character);
});
