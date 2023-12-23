// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }

// const arr=["Bijay",1,2,"+"];
// for(let i=0;i<arr.length;i++)
// {   
// console.log(arr[i]);
// }
/////////////////////////////////////////////////////////////////////////////

/// FOREACH : it only works with arrays
// for each element of the array we use this (forEach )
// syntax
//  aaray_name.forEach(function(character)
// {
//     console.log(character);
// })
// print all values of array


// const arr=["Bijay",1,2,"+"];
// arr.forEach(function(x)
// {
//     console.log(x);
// })


//////////////////////////////////////////////////////////////////////////////////////////

/// FOR..IN LOOP  working with object
// syntax
// for(let variable in object)
// {
//     // code to execute
// }
 
// const emp ={
//     name: "aalok",
//     age: 23,
//     des:"student",
//     work:"coder",
//     graduat:true
// }
// for(k in emp)
// {
//     console.log(k,emp[k]);
// }
// for(att in emp)
// {
//     console.log(att);
//     console.log(att,emp[att]);
// }
// console.log(emp.name,emp.work);
// console.log(emp);
// console.log(emp['name'],emp['work']);

// const arr=["Bijay",1,2,"+"];
// arr.isgradutae=true;
// for(a in arr)
// {
//     console.log(a);
// }
// for(b of arr)
// {
//     console.log(b);
// }
/// ///////////////////////////////////////////////////////////////

/// FOR ... OF  LOOP  : used for only arrays

// const arr=["aalok",23,"coder","m","student",true];
// for(i of arr)
// {
//     console.log(i);
// }

///////////////////////////////////////////////////////////////////////

/// WHILE LOOP

let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

/// DO....WHILE LOOP

let j=24;
do{
    console.log(j);
    j++;
}
while(j<=14);

let userInput;
do{
    userInput = prompt("Enter a positive number : ");
   
    userInput=parseInt(userInput);
}while(isNaN(userInput)||userInput<=0);