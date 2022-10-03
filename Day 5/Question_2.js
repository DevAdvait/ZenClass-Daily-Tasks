// https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

// console.log("Write a function called “addFive”.\nGiven a number, “addFive” returns 5 added to that number.");
// function addFive(x){
//     return x + 5;
// }
// var result = addFive(15);

// console.log("Write a function called “getOpposite”.\nGiven a number, return its opposite");
// function getOpposite(num) {
//     if (typeof(num) == "number") console.log(-num) ;
//     else console.log(-1) ;

// }
// var result = getOpposite(15);

// console.log("Fill in your code that takes an number minutes and converts it to seconds.");
// var min = 5;
// function toSeconds(min) {
//     let seconds = min * 60;
//     console.log(seconds);
// }
// var secs = toSeconds(min)

// console.log("Create a function that takes a string and returns it as an integer.")
// var mystr = "5";
// function toInteger(mystr) {
//     let num = parseInt(mystr, 10);
//     console.log(num);

// }
// var myint = toInteger(mystr)

// console.log("Create a function that takes a number as an argument, increments the number by +1 and returns the result.");
// var myint = 0;
// function nextNumber(myint) {
//     return myint + 1;
// }
// var myNextint = nextNumber(myint)

// console.log("Create a function that takes an array and returns the first element.");
// var arr = [1, 2, 3];
// function getFirstElement(arr) {
//     return arr[0];

// }
// var data = getFirstElement(arr)

// console.log("Convert Hours into Seconds\nWrite a function that converts hours into seconds.");
// var arr = [1, 2, 3];
// function hourToSeconds(arr) {
//     let result = [];
//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 3600);
//     }
//     return(result);
// }
// var data = hourToSeconds(arr);

// console.log("Find the Perimeter of a Rectangle\n a function that takes height and width and finds the perimeter of a rectangle.");
// function findPerimeter(num1,num2) {
//     return(((2 * num1 ) + (2 * num2)));

// }
// var peri = findPerimeter(6,7)

// console.log("Less Than 100?\nGiven two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
// function lessThan100(num1,num2) {
//     if(num1 + num2 < 100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var res = lessThan100(22,15)


// console.log("There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.");
// function remainder(num1,num2) {
//     return (num1 % num2);
// }
// var res = remainder(1,3)


// console.log("Old macdonald had a farm:\nMacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:");
// function CountAnimals(tur,horse,pigs) {
//     return ((tur*2)+(horse*2)+(pigs*4));
// }
// var legs = CountAnimals(2,3,5)


// console.log("Frames Per Second\nCreate a function that returns the number of frames shown in a given number of minutes for a certain FPS.");
// function frames(num1,num2) {
//     return (num1*num2);
// }
// var fps = frames(1,2)


// function divisibleByFive(num1) {
//     if(num1 % 5 == 0) return true;
//     else return false;
// }
// var divisible = divisibleByFive(5)


// function isEven(num){
//     if(num % 2 == 0) return true;
//     else return false;
//    }
//    var even = isEven(5)


// function areBothOdd(num1, num2){
//     if (num1 % 2 != 0 && num2 % 2 != 0) return true;
//     else return false;
//    }
// var result = areBothOdd(5, 11);


// function getFullName(firstName, lastName){
//     return (firstName + " " + lastName);
//    }
// var result = getFullName("GUVI","GEEK");


// function getLengthOfWord(word1){
//     if(word1 == "") return 0;
//     else if (word1 == null) return -1;
//     else if (Number.isInteger(word1)) return -1;
//     else  return word1.length;
//    }
// var result = getLengthOfWord("hello world");
// console.log(result);


// function isSameLength(word1, word2){
//     if (word1.length == word2.length) return true;
//     else return false;
//    }
// var result = isSameLength("GUVI","GEEK");
// console.log(result);


// console.log(getDistance(100, 100, 400, 300));
// function getDistance(x1, y1, x2, y2)
// {
//     let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2));
//     return result.toFixed(3);
// }


// function getNthElement(array,n){
//     if(array.length == 0) return undefined;
//     else return array[n];
//    }
// let result = getNthElement([1, 3, 5], 1);
// console.log(result);


// function getLastElement(array){
//     if(array.length == 0) return undefined;
//     else return array[array.length - 1];
//    }
// let result = getLastElement([1, 2, 3, 4]);
// console.log(result);


// var obj = {
//     mykey: "value"
//    };
//    function getProperty(obj, key) {
//         return obj[key];
//    }
// let result =  getProperty(obj,"dummykey");
// console.log(result);


// var obj = {
//     mykey: "value"
//    };
//    function addProperty(obj, key){
//         obj[key] = true;
//    }
// var result = addProperty(obj, "dev");
// console.log(obj);
// console.log(obj.dev);


// var obj = {
//     name: "value"
//    };
//    function removeProperty(obj, key){
//         delete obj[key];
//    }
   
// var result = removeProperty(obj, "name");
// console.log(obj);
// console.log(result);

// var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = function countPositivesSumNegatives(arr) {
//     let result = [];
//     let count = 0;
//     let pos_count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count += arr[i];
//         }
//         else if (arr[i]>0) {
//             pos_count += 1;
//         }
//     }
//     result.push(count);
//     result.push(pos_count);
//     return result;
// }
// console.log(ar2(arr));


// function getPositives(ar)
// {
//     let result = [];
//     for (var i = 0; i < ar.length; i++) {
//         if (ar[i] > 0){
//          result.push(ar[i]);
//         }
//     }
//     return result;
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives(ar);
// console.log(ar2);


// function powersOfTwo(n){
//     let result = [];
//     for (var i = 0; i < n; i++) {
//         result.push(2**i);

//     }
//     return result;
//   }
// console.log(powersOfTwo(5));


// function findMax(ar)
// {
//     return Math.max(...ar);
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max: ", max);


// printPrimes(100);
// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
//  var n = 0;
//  var i = 2;
 
//  while(n < nPrimes)
//  {
//  if (isPrime(i))
//  {
//  console.log(n," → ", i);
//  n++;
//  }
 
//  i++;
//  }
// }
// // Returns true if a number is prime
// function isPrime(n)
// {
//     for(var i = 2; i < n; i++)
//     if(n % i === 0) return false;
//     return n > 1;
// }


// console.log(getPrimes(10, 100));
// function getPrimes(nPrimes, startAt)
// {
//      var n = 0;
//     var i = startAt;
    
//     while(n < nPrimes)
//     {
//     if (isPrime(i))
//     {
//     console.log(n," → ", i);
//     n++;
//     }
// }
//     isPrime(i)
// }

// function isPrime(n)
// {
//     for(var i = 2; i < n; i++)
//     if(n % i === 0) return false;
//     return n > 1;
// }


// var s = reverseString("JavaScript");

// function reverseString(s)
// {
//    let result = s.split("");
//    let res = result.reverse();
//    let final = res.join("");
//    return final;

// }
// console.log(s);


// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
// var ar = mergeArrays(ar1, ar2);
// console.log(ar);
// function mergeArrays(ar1, ar2)
// {
//  var result = [];
// //this will add the first array to the result array
// for(let el of ar1)
//  {
//  result.push(el);
//  }
 
//  //Some piece of code goes here 
//  for(let el of ar2)
//  {
//  result.push(el);
//  }
 
//  return result;
// }


// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
// function sumCSV(s)
// {
//     let sum = 0;
//   // your code here
//   let new_arr = s.split(",");
  
//   for (var i = 0; i < new_arr.length; i++){
//     sum += parseInt(new_arr[i], 10);
//   }
//   return sum;
// }