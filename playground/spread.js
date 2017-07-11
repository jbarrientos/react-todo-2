// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Maya', 'Cookie'];
// var groupB = ['Marie'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

function greet(name, age){
  console.log('Hi ' + name + ', you are ' + age);
}

var person = ['Yorch',22];
var personTwo = ['Sonia', 21];

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

final.forEach(function(name){
  console.log('Hi ' + name);
});
