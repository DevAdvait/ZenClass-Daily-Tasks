// Fix the code to get the largest of three.

// Code:

// aa = (f,s,t) => {
 
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);


// Fix the code to Sum of the digits present in the number

// Code:

// let n = 123;
// console.log(add(n));
// function add(x)
// {
//     let n = String(x);
    
//     let sum = 0;
// for(var i=0;i<n.length;i++){
    
//     sum += parseInt(n[i]);
    
//  }
//  return sum;
// }


// Fix the code to Sum of all numbers using IIFE function

// Code:

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++){
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();


// Fix the code to gen Title caps.

// Code:

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i < arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano(arr);

// Fix the code to return the Prime numbers

// Code:

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);


// Fix the code to sum the number in that array

// Code:

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const add_num = (a, b) =>
//  {a + b}
// const sum = num.reduce(add_num)
// console.log(sum);

// Fix the code to rotate an array by k times and return rotated array using IIFE function

// Code:

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
 
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})(arr);


// Fix the code to gen Title caps.

// Code:

// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }
// })();

// print all odd numbers in an array using IIFE function

// Code:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 != 0) {
//  console.log(arr[i]);
//  }}
// })();


// Fix the code to reverse.

// Code:

// (function(str){
//  str1 = str.split("").reverse().join("");
//  console.log(str1); 
// })("abcd")

// Fix the code to remove duplicates.

// Code:

// var res = function(arr){
//     newArr = [];
//  for(var i=0; i < arr.length; i++){
 
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }
// res(["guvi","guvi","geek","duplicates","guvi","geek"])

// Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:

// var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
 
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
// }


// Fix the code to give the below output:

// Sum of odd numbers in an array

// Code:


// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);


// Fix the code to give the below output:

// Swap the odd and even digits

// Code:

// aa = data=>{
//  var a=data;
// for(i=0;i<a.length-1;i++){
//  var l="";
//  var s=a[i+1]
//  var b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(l);
// }
// aa("1234");