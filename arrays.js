var chocolateBars=[snickers,hundred grand,kitkat,skittles];

var array1=new array();
var add;
function addElementToBeginningOfArray(array1,add){
  add=4
  array1=[1,2,3]
  var newArray1=[add,...array1]
  return newArray1;
}

function destructivelyAddElementToBeginningOfArray(array1,add){
  add=4
  array1=[1,2,3]
array.unshift(add)
return array1;
}

function addElementToEndOfArray(array1,add) {
  var add=0
  array1=[1,2,3]
  var newArray1=[add,...array1]
  return newArray1;
}

function destructivelyAddElementToEndOfArray(array1,add){
  var add=0
  array1=[1,2,3]
  array.push(add)
  return array1;
}
