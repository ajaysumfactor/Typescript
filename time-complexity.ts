//With Big(o) Notation we are generally talking about Wrost case scenario

//O(1)
//this is ideal ,It does not matter how many items there are,it may be one or more than one the amount of time to complete will remain the same.


//Example 1 : --->
// const names:string[]=["Thomas","Alva","CV","Bhabha"];

// function display(a:string[]):void{
//   console.log("All you are scientists");
// }
// display(names); //o(1)--->Here is no matter how many element will be in the array our console will run only one time .



//Example 2:----->
// function get_first_element(arr:number[]):void{
//     console.log("First element of array is : "+arr[0]);
// }
// get_first_element([34,566,8,23,12,45]);




//O(n)

const names:string[]=["Thomas","Alva","CV","Bhabha"];
function displayName(name:string[]):void{
    for(let i=0;i<name.length;i++){
        console.log(i+1+"st name is : -->"+name[i]);
    }
}
displayName(names);


//sum of array element 

function sumOfArray(arr:number[]):number{
    const length=arr.length;
    let sum=0;
    for(let i=0;i<length;i++){
      sum=sum+arr[i];
    }
    return sum;
}

console.log(sumOfArray([34,54,65,12,34,56]));




//o(n^2)

function sumOf2dArray(arr:number[][]):number{
    let sum=0;
    arr.forEach((row)=>{
        row.forEach((element)=>{
            sum=sum+element;
        });
    });
    return sum;
}
const finalSum=sumOf2dArray([
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
  ]);

console.log("the sum of all element is : "+finalSum);



//O(n^3)

// function print3dArray(n):void{
//     for(let i=0;i<n;i++)
//     {
//         for(let j=0;j<n;j++){
//             for(let k=0;k<n;k++){
//                 console.log(i,j,k);
//             }
//         }
//     }
// }
// print3dArray(5);



//o(logn)

function logFunc(n):any{
 if(n==0){
    return "Done";
 }
    n=Math.floor(n/2);
    return logFunc(n);
 
}
console.log(logFunc(8));



//O(logn)---->Binary search
// let arr:number[]=[2,4,6,8,10,20,30,40];
// let start:number=0;
// let end:number=arr.length-1;
// let target:number=50;
// function binarysearch(arr,start,end,target):boolean
// {
//   if(start>end){return false;}
//   let midIndex=Math.floor((start+end)/2);
//   if(arr[midIndex]===target){return true;}
//   if(arr[midIndex]>target){
//     return binarysearch(arr,start,midIndex-1,target);
//   }
//   else{
//     return binarysearch(arr,midIndex+1,end,target);
//   }
// }

// console.log(binarysearch(arr,start,end,target));


//second version---->


let arr:number[]=[2,4,6,8,10,20,30,40];
let start:number=0;
let end:number=arr.length-1;
let target:number=5;
function binarysearch(arr,start,end,target):boolean
{
  console.log(arr.slice(start,end+1));
  if(start>end){return false;}
  let midIndex=Math.floor((start+end)/2);
  if(arr[midIndex]===target){return true;}
  if(arr[midIndex]>target){
    return binarysearch(arr,start,midIndex-1,target);
  }
  else{
    return binarysearch(arr,midIndex+1,end,target);
  }
}

console.log(binarysearch(arr,start,end,target));




//O(nlogn)

function NlogN(n){
    let y=n;
    while(n>1){
        n=Math.floor(n/2);
        for(let i=1;i<=y;i++){
            console.log(i);
        }
    }
}



//O(nlogn)
//merge sort ------

function mergesort(arr){
    if(arr.length<2){
        return arr;

    }
  const middleIndex=Math.floor(arr.length/2);
  const leftArr=arr.slice(0,middleIndex);
  const rightArr=arr.slice(middleIndex,arr.length);
  return merge(mergesort(leftArr),mergesort(rightArr));

}

function merge(leftArr,rightArr){

}