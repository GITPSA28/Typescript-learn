function sumArr(arr: number[]){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]??0;
    }
    return sum;
}

function logTuple(tup:[number,number]){
    console.log(tup[0])
    console.log(tup[1])
    // console.log(tup[2]) error
}

let nums:[number,number]=[1,3]

console.log(sumArr(nums))
console.log(logTuple(nums))
