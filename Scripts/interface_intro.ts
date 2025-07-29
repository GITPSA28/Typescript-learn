{type userType={name:string,age:number,subjects:string[]}
interface userInterface {
    name:string,
    age:number,
    gender:string,
    subjects:string[]
}
const person1:userInterface={
    name:'PSA',
    age:23,
    gender:'male',
    subjects:['python','c++','typescript']
}

const person2:userType={
    name:'Sunil',
    age:22,
    subjects:['Java','c#']
}

function printPerson(user:userType){
    console.log(user.name);
    console.log(user.subjects.join(', '))
    return ;
}
printPerson(person2);
printPerson(person1);
}