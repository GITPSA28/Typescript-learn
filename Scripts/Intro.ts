{function add(arg1: number,arg2:number){
    return arg1 + arg2;
}

function concatenate(arg1:string,arg2:string){
    return arg1+arg2;
}

function check(arg:number){
    if(arg>2){
        return false;
    }
    return true;
}

const a1 = 2;
const a2 = 2;

const r1 = add(a1,a2);
console.log(r1);

const a3 = 'hello';
const a4 = ' world';

const r2 = concatenate(a3,a4);
console.log(r2)
}
