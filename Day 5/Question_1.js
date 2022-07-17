console.log("Do the below programs in anonymous function & IIFE");

// console.log("a. Print odd numbers in an array");
// const oddNumbers = function () {
//     let result = [];
//     for (var i=0; i<20; i++){
//         i += 1;
//         result.push(i);
//     }
//     console.log(result);
//     };
// oddNumbers();

// console.log("b. Convert all the strings to title caps in a string array");
// (function () {
//     var sample_text = "Lorem ipsum dolor sit amet, consectetur adip";
//     console.log(sample_text.toUpperCase());
// })();

// console.log("c. Sum of all numbers in an array");
// let arr_sum = () => {
//     let sample = [1, 2, 3, 4, 5, 6, 7, 8];
//     result = 0;
//     for(var i = 0; i<sample.length; i++){
//         result += sample[i];
//     }
//     console.log(result);
// }
// arr_sum();

// console.log("d. Return all the prime numbers in an array");
// let sample_arr = [84, 56, 3, 56, 41, 343, 68, 56, 357, 87, 8, 45, 34];
// console.log("Sample array : "+sample_arr);
// let result = [];
// let check_prime = function(arr){
//     //function to check num is prime or not
//     let isPrime = function (num) {
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
// }
// check_prime(sample_arr);
// console.log("Prime Numbers from Sample Array : "+result);

// console.log("e. Return all the palindromes in an array")
// let sample_arr =[125, 150, 190, 181, 15351, 282, 11, 5676765];
// console.log("Sample array = " + sample_arr);
// let result = [];
// const check_palindrome = function(num)
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
// console.log("Result = " + result);

// console.log("f. Return median of two sorted arrays of the same size");
// let sample_one = [125, 150, 15, 190, 181,97];
// let sample_two = [15351, 282, 11, 5676765,30,17];
// // function to sort arrays
// let sort_array = function(arr_one, arr_two) {
//     arr_one.sort(function(a,b){return a-b;});
//     arr_two.sort(function(a,b){return a-b;});
// }
// // function to find median
// let median = function(arr_one) {
//     if (arr_one.length % 2 == 0){
//         let first = arr_one[(arr_one.length / 2) - 1];
//         let second = arr_one[arr_one.length / 2];
//         let median = (first + second) / 2;
//         console.log("Median of the array [" + arr_one + "] = " + median);
//     }
//     else{
//         let median = arr_one[parseInt(arr_one.length/2)];
//         console.log("Median of the array [" + arr_one + "] = " + median);
//     }
// }
// //driver code
// sort_array(sample_one,sample_two);
// median(sample_one);
// median(sample_two);


// console.log("g. Remove duplicates from an array");
// let sample = [15351, 282, 11, 5676765, 11, 30, 17, 27, 30, 282, 30, 15, 11, 17];
// let remove_dups = function(arr){
//     let unique = [...new Set(arr)];
//     console.log("Original Array = [" + sample + "]\nNew Array = [" + unique +"]");
// }
// remove_dups(sample);


// console.log("h. Rotate an array by k times")
// //sample array 
// arr = [15351, 282, 11, 5676765,30,17];  
// //rotate function
// const rotate = function(samp_arr) {
//     k=3;
//     temp = "";
//     for (let i=0; i<k;i++) {
//         temp = samp_arr[samp_arr.length - 1];
//         samp_arr.unshift(temp);
//         samp_arr.pop(samp_arr[-1]);
//     }
//     console.log("Result = [" + samp_arr + "]");
// }
// // invoke function
// console.log("Original Array = [" + arr + "]");
// rotate(arr);

