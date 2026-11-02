/* 
Variables- A named place where you store a value 
Let- tells typscript you are declaring a variable whosw value can be reassigned
Example find the cost of two items
Const- tells typescript you are declaring a variable whose value cannot be reassigned
*/

let item1: number = 650;
let item2: number = 450;
const age: number = 30;

let totalCost: number = item1 + item2;

console.log("totalCost: ", totalCost);
console.log("age: ", age);

item1 = 700;

console.log("Updated item1: ", item1);