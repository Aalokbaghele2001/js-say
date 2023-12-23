/* this is multi line command
*/

var x = "rani"; //    'var' keyword use use as globle variable 
//this scope is every where you can use this variable every where
let y = "aalok"; // 'let' keyword use as local variable this scope only inside the block 
// if it declare or assign in blocks otherwise you declare or assign outside the block this is 
// treated as globle

const pi=3.14; // 'const' it is the constant variable value of the const varible can not changed
console.log(pi);
console.log(x); //  -> rani
if(true)
{
    let y="mom";
    x="vina";
    console.log(x); // -> vina
    console.log(y); // -> mom
}

console.log(x); // -> vina
console.log(y); // -> aalok
// pi=54; // it will show error becuase const variable can't change
// console.log(pi);  // error

let arr = [11, "Bijay",true];
console.log(arr);

let obj = {
    name: "bjay",
    age: 32,

};
console.log(obj);

function greet(){
    console.log("namaste");
}
greet();

alert("hello aalok");