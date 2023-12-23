var aPerson;
function greet(name)
{ 
  
    console.log(`Hello ${name}`);
    console.log('Hello',spy);
    console.log(`Hello ${spy}`);
   
    console.log("Hello",chor);
}
var chor="pitter";
let spy="aalok";
greet(aPerson);  // output is " Hello undefind"  because aPerson not initialize
aPerson="jane doe";
greet(aPerson);  // output is "Hello jane doe" because aPerson is declare in line 7 

greet(bPerson); // give the error cannot access before initialization HOISTING not working 
greet(cPerson); // give the error cannot access before initialization HOISTING not working


// let aPerson = "jane doe"; // here we decalre as global but HOISING not worked

// var aPerson = "jane doe"; // output is "Hello undefind"
/* var keyword  behind the scene it working like this :
var aPerson;
later in code while execute the valaue "jane doe"
this called HOISTED means it is treated as it is declare before 
*/

// const aPerson = "jane doe"; // here we declare as global HOISTING not worked

let bPerson="john wick";
const cPerson=" john rock";