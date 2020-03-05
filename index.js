const arr=[1,2,3,4,5]
let i=0;
arr.forEach(apple);

function apple(number,index){
console.log("Value:"+number);
}
//Executes looping for the number of elements in the array
//Output:Value:1 Value:2 Value:3 Value:4 Value:5

var a=arr.map(ball);

function ball(x){
  return x*10;
}