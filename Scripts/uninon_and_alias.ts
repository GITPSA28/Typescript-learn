type addable=number|string;
function add(arg1:addable ,arg2:addable){
    if(typeof arg1==='number' && typeof arg2==='number')
    return arg1+arg2;
    if(typeof arg1==='string' && typeof arg2==='string')
    return arg1 + arg2;
    return;
}
const n1=10;
const n2=30;

console.log(add(n1,n2));

const s1='Hello';
const s2=' World';
console.log(add(s1,s2));