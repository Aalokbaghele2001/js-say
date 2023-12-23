//  = assignment operator
let firstVar = 10;
firstVar =100;

// + addition operator
let Num1 = 189;
let Num2 = 258;
console.log(Num1+Num2);
let Num3 = 189;
let Num4 = "flats";
console.log(Num3+Num4);
let str1="aalok";
let str2="baghele";
const res1=str1+str2;
console.log(res1);
console.log(typeof Num1,typeof Num4,typeof str1,typeof(Num1+Num2),typeof(Num3+Num4),typeof(str1+str2),typeof res1);


///////////////////////////////////////////////////

let clientVisit = 0;
clientVisit=clientVisit+1;
clientVisit +=1;
console.log(" line 24 : ",clientVisit);

// += , *= , /= , **= same as 

///////////////////////////////////////////////////////////

// a++ post increament operator
let counter =0;
counter++;
console.log("line 33 : ",counter);
/// ++a pre increament operator 
let counter1 =0;
++counter1;
console.log("line 37 : ",counter1);
let num_a=5,num_b=10;
console.log("line 39: " ,(num_a++)+num_b,num_a); // output = 15 , 6 value of a 
let num_c=5,num_d=10;
console.log("line 41 : ",(++num_c)+num_d); // output = 16

//////////////////////////////////////////////////////


let third_num=11;
let forth_num=2;
console.log("line 48 : ",third_num/forth_num); // division output is 5.5
console.log("line 49 :",third_num%forth_num);  // reminder output is 1

console.log("line 51 :",2**3); /// ** binary operator is exponent out put is 8 means 2^3

console.log("line 53 : ",27>12); 
console.log("line 54 : ",27<12);
console.log("line 55 : " ,2==2);
console.log("line 56 : " ,2>=2);
console.log("line 57 : " ,2<=2);
console.log("line 58 : ",7=="7");// out put is true 
 // second value in string if it is number and compare with 
//first number value then it will converted second value in number 
// == is only compare value not data type 
// === is compare value with data type 

console.log("line 64 : ",7==="7"); // output is false  // this is strict  comparision equalitiy check  operator
let a="7";
let b= Number(a);
console.log(typeof a,typeof b);

console.log("line 69 : ",2!="2"); // compare only value 
console.log("line 70 : ",2!=="2"); /// compare value with data type


///////////////////////////////////////////////////////////////
// LOGICAL OPERATOR
// && AND , || OR, !NOR

let age=27;
let citizenship="Indian";
console.log("line 79: ",age>=18&&citizenship==="Indian");

let AIR=101;
let isRich=false;
console.log("line 83 : ",AIR<=100&&AIR>=1||isRich);

let flag=true;
console.log("line 86 : ",!flag);

///////////////////////////////////////////////////////////////////////
// BITWISE OPERATOR 
// &AND , |OR , ~NOR
console.log("line 91 : ", 5 & 3); // here both are number firstly converted into binary then perform AND gate (operator) task
/// 0,1=0
/// 0,0=0
/// 1,1=1
console.log("line 92 : ", 5 | 3); // same OR OPERATOR task
/// 0,1=1
/// 0,0=0
/// 1,1=1
console.log("line 93 : ",~9); // output -10 // here number is converted into binary then perform NOR operator
 // for this there is shortcu -(9+1)=-10
 // 0=1
 // 1=0

 console.log("line 96 : ",2^3); // output is 1 // XOR operator here converted into binary
 ///then here same bit = 0 and different bit = 1 
 // 0,1=1
 // 0,0=0
 // 1,1=0
 console.log("line 96 : ",6^9);

/// RIGHT SHIFT >> ( 3>>2 here we first 3 converted into binary then here 2 bit is shifted to right )
///LEFT SHIFT << ( 3<<2 here we first 3 converted into binary then here 2 bit is shifted to right ))

console.log("line 114 : ",3>>2); // output 0
// 3=0011 then 2 bit is shifted right -> 0000=0 then converted into decimal
console.log("line 114 : ",3<<2); // output 12
// 3=0011 then 2 bit is shifted left -> 1100=12 then converted into decimal

console.log("apple" < "banana");
