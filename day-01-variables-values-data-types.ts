/* 
Variables- A named place where you store a value 
Let- tells typscript you are declaring a variable whosw value can be reassigned
Example find the cost of two items
Const- tells typescript you are declaring a variable whose value cannot be reassigned
*/

let item1: number = 650;
let item2: number = 450;
const kilometers: number = 30;

let totalCost: number = item1 + item2;

console.log("totalCost: ", totalCost);
console.log("kilometers: ", kilometers);

item1 = 700;

console.log("Updated item1: ", item1);

//Data types- The type of data that can be stored in a variable

//numbers
 let age: number = 30;

 //string
 let fullName: string = "Rose Njeri";

 //boolean
 let isLearning: boolean = true;

 //Arrays-collection of values of the same data type
 let fruits: string[] = ["Mango", "Banana", "Apple"];
 let numbers: number[] = [1, 2, 3, 4, 5];