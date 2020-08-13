var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

var array1=new array();
var array2=new array();

function addElementToBeginningOfArray(array1,add){
  array1=[1,2,3]
  var newArray1=[add,...array1]
  return newArray1;
}

function destructivelyAddElementToBeginningOfArray(array1,add){
  array1=[1,2,3]
array.unshift(add)
return array1;
}

function addElementToEndOfArray(array1,add) {
  array1=[1,2,3]
  var newArray1=[add,...array1]
  return newArray1;
}

function destructivelyAddElementToEndOfArray(array1,add){

  array1=[1,2,3]
  array.push(add)
  return array1;
}

function accessElementInArray(array1,n){
  array1=[1,2,3,4]
  n=3
  return array1[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1=[0,1,2,3,4,5];
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1){
  array1=[1,2,3,4]
  array2=array1.slice(1);
  return array2;
}

function estructivelyRemoveElementFromEndOfArray(array1){
  array1=[1,2,3,4]
  array2=array1.pop();
  return array2;
}

function removeElementFromEndOfArray(array1){
  array1=[1,2,3,4]
  return array1.slice(0,array1.length-1)
}
