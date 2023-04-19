//O(nlogn)
//merge sort ------

//bestcase--O(nlogn)
//wrostcase--O(nlogn)


function mergesort(arr):number[]{
    if(arr.length<2){
        return arr;

    }
  const middleIndex=Math.floor(arr.length/2);
  const leftArr=arr.slice(0,middleIndex);
  const rightArr=arr.slice(middleIndex,arr.length);
  return merge(mergesort(leftArr),mergesort(rightArr));

}


function merge(leftArr,rightArr):number[]{
 let resultarr:number[]=[];
 let leftindex=0;
 let rightindex=0;
 while(leftindex<leftArr.length && rightindex<rightArr.length){
    if(leftArr[leftindex]<rightArr[rightindex]){
        resultarr.push(leftArr[leftindex]);
        leftindex=leftindex+1;
    }
    else{
        resultarr.push(rightArr[rightindex]);
        rightindex=rightindex+1;
    }
 }
 return resultarr.concat(leftArr.slice(leftindex)).concat(rightArr.slice(rightindex));

}

console.log(mergesort([23,56,32,11,23,45,88,24]));


//O(2^n)

//fibbonacci

function fib(n):number{
    if(n===0){
        return 0;

    }
    if(n===1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(5));



//O(n!)

function f(n):void{
    if(n===0){
        console.log("done");
        return ;
    }
    for(let i=0;i<n;i++){
        f(n-1);
    }
}
f(5);





//space complexity
function countdown(n:number):any{
    if(n==0){
        return;
    }
    return countdown(n-1);

}
//it will take o(n) space in memory.

// function twoloop{
//     for(let i=0;i<n;i++)
//     {

//     }
//     for(let i=0;i<names;i++){

//     }

// }
//--O(n);