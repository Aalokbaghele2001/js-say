// Write a JS code to print Even numbers in given array

// const arr=[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99,100];
// for(i of arr)
// {
//     if(i%2==0)
//     console.log(i);
// }

// arr.forEach(function(a)
// {
//     if(a%2==0)
//     {
//         console.log(a);
//     }
// })

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     console.log(arr[i]);
// }

// let i =0;
// while(i<arr.length)
// {
//     if(arr[i]%2==0)
//    console.log(arr[i]);
//         i++;
// }

/////////////////////////////////////////////////////////////////////////////////

// Write a JS code to find the power of a number using for loop

// let num=5;
// let power=-2;
// let res=1;
// if(power>0)
// {
//    res = powerNum(num,power);
// }
// else if(power<0)
// {
//    res=1/powerNum(num,power*-1);   
// }
// else
// res*=1;
// console.log(res);
// function powerNum(n,p)
// {
//     let res=1;
//     // for(let i=1;i<=p;i++)
//     // {
//     //     res*=n;
//     // }

//     while(p>0)
//     {
//         res*=n;
//         p--;
//     }

//     return res;
// }


////////////////////////////////////////////////////////////////////////////
// Write a JS code to print below pattern using for loop. 
// In the function range should be passed as param, 
// till that range you have to print the numbers.
//  In this example the range is 8

//  let n=8;
//  let str="";
//  for(let i=1;i<=n;i++)
//  {
//     for(let j=1;j<=i;j++)
//     {
//         str+=j;
//     }
//     str+="\n";
//  }
//  console.log(str);

//////////////////////////////////////////////////////////////////////////////
// Write a JS code to find the no of digits in a number.
//  Example: console.log(digitCount(8367)); //4
// function digitCount(n)
// {
//     let count=0;
//     while(n>0)
//     {
//         n=parseInt(n/10);
//         count++;  
//     }
//     return count;
// }
// console.log(digitCount(8367));


/////////////////////////////////////////////////////////////////////////
// Write a JS code to calculate the sum of digits in a number. 
// Example: console.log(digitSum(4367)); //20


// function digitCount(n)
// {
//     let sum=0;

//     while(n>0)
//     {
//         let r=n%10;
//         n=parseInt(n/10);
//         sum+=r;
//     }
//     return sum;
// }
// console.log(digitCount(8367));


////////////////////////////////////////////////////////////////////////
// Write a JS code to find the largest number in an array


// const arr=[5,2,7,3,9,2,7,5,9,1,3,6];

//     for(a of arr)
//     {
//         if(arr[0]>a)
//         continue;
//         else
//         {
//             arr[0]=a;
//         }
//     }
//     console.log(arr);
//     console.log(arr[0]);

//////////////////////////////////////////////////////////////////////
// Write a JS code to find product of two arrays. Example: 
// var arr1 = [3,45,23,78,34];
// var arr2 = [4,2,34,4,12,1];
// console.log(findProd(arr1,arr2)); //[12, 90, 782, 312, 408, 1]

// var arr1 = [3,45,23,78,34,1,5];
// var arr2 = [4,2,34,4,12];
// console.log(findProd(arr1,arr2));

// function findProd(arr1,arr2)
// {
//     let d=arr1.length-arr2.length;
//     let res=[];

//     for(let i=0;i<arr1.length-1;i++)
//   {
//     if((arr1.length-d)===i)
//     {
//         for(let m=arr1.length-d;m<arr1.length;m++)
//         {
//     res.push(arr1[m]);
//         }
//     }
//     for(let j=i;j<=i;j++)
//     {
      
     
//         res.push(arr1[i]*arr2[j]);
        

//     }
//   }
//   console.log(res.length);
//   return res;

// }

// var arr1 = [3,45,23,78,34,1,5];
// var arr2 = [4,2,34,4,12,1];
// let a1=arr1.length;
// let a2=arr2.length;
// let a=[];
// if(a1>a2)
// {
//     for(let i=0;i<arr1.length-1;i++)
//     {
//         for(let j=i;j<=i;j++)
//         {
//           let ak=0;
//           ak=arr1[i]*arr2[j]
//           a.push(ak);
//         }
//     }
// }
// console.log(a);


///////////////////////////////////////////////////////////////////////
//Write a JS code to print the Fibonacci series for a given value of N

let n=10;
let a=0;
let b=1;
while(a<=n)
{
    console.log(a);
    let t=b;
    b=a+b;
    a=t;
    
}