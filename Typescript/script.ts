let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 4;
let chunkarray = [];

let obj = [ { 'user': 'bash', 'age': 2, 'active': true },
{ 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }]


console.log(getChunk(arr, num));
console.log(reduceArray(arr, (acc, curr) => acc + curr));
console.log(filterArray(obj,(val,ind,ar)=>val.active))
console.log(findFunc(obj,(val,ind,ar)=>val.age<40))
console.log(sumArray(arr));

//program for __.chunk alternative
function getChunk(arr, num) {
    for (let i = 0; i < arr.length; i = i + num) {
        var temp = [];
        for (let j = i; j < i + num; j++) {
            if (j < arr.length) {
                temp.push(arr[j]);
            }
        }
        chunkarray.push(temp);
    }

    return chunkarray;
}

//function for __.reduce alternative
function reduceArray(arr, reduceFn, init = arr[0]) {
    let sum = init;
    for (let i = 1; i < arr.length; i++) {
        sum = reduceFn(sum, arr[i]);
    }
    return sum;
}

//function for __.filter alternative
function filterArray(arr, filterFn) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterFn(arr[i], i, arr)) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

//function for __.find alternative
function findFunc(arr, findFn) {
    var temp;
    for (let i = 0; i < arr.length; i++) {
        if (findFn(arr[i], i, arr)) {
            temp = arr[i];
            break;
        }
    }
    return temp;
}

//funcion for __sum alternative
function sumArray(arr){
var sum = 0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i]
}
return sum;
}