
console.log("Do the below programs in arrow functions")

// a. Print odd numbers in an array
// var oddNum = (n) => {
//     let result = [];
//     let num = 1;
//     let i = 0;
//     while (i < n) {
//         result.push(num);
//         num += 2;
//         i++
//     }
//     return result;
// }

// console.log(oddNum(10));

//b. Convert all the strings to title caps in a string array
// let sample = ["hello", "world"]
// var caps = (x) => { 
//     let i = 0;
//     let result = [];
//     while(i < x.length) {
//         let str_cap = x[i].toUpperCase();
//         result.push(str_cap);
//         i++;
//     }
//     return result;
// }
// console.log(caps(sample));

//c. Sum of all numbers in an array
// let sample_arr = [15351, 282, 11, 567,30,17];
// var arr_sum = (x) => {
//     let i = 0;
//     let sum = 0;
//     while(i < x.length) {
//         sum += x[i];
//         i++;
//     }
//     return sum;
// }
// console.log(arr_sum(sample_arr));


//d. Return all the prime numbers in an array
// let sample_arr = [84, 56, 3, 56, 41, 343, 68, 56, 357, 87, 8, 45, 34];
// let result = [];
// let check_prime = (arr) =>{
//     //function to check num is prime or not
//     let isPrime = (num) => {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false;
//             }
//             else{
//                 return true;
//             }
//         }
//     }
//     //passing numbers from sample_arr to check isPrime
//     for (i=0;i<arr.length;i++){
//         if(isPrime(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// } 
// console.log(check_prime(sample_arr));


//e. Return all the palindromes in an array
// let sample_arr =[125, 150, 190, 181, 15351, 282, 11, 5676765];

// let result = [];
// const check_palindrome = (num) =>
// {
//     let str = "" + num;
//     let len = str.length;
//     for (let i = 0; i < parseInt(len/2,10); i++) {
//         if (str[i] != str[len-1 - i]){
//             return false;
//         }
//     }
//     return true;
// }
// for(i=0;i<sample_arr.length;i++)
// {
//     if(check_palindrome(sample_arr[i])){
//         result.push(sample_arr[i]);
//     }
// }
// console.log(result);