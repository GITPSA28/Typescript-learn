const user1={
    name:'PSA',
    age:23,
    subjects:['python','c++','typescript']
}

const user2={
    name:'Sunil',
    age:24,
    subjects:['Java','c#']
}

function printObj(user:{name:string,age:number,subjects:string[]}){
    console.log(user.name);
    console.log(user.subjects.join(', '))
    return ;
}
printObj(user2)