//static member
//these member can not associated with a particular instance of class;

class myclass{
    static x=0;
    static printx(){
        console.log(myclass.x);
    }
}
const clas =new myclass();
 //clas.x;
console.log(myclass.x);
myclass.printx();

//1..static can also use the access modifiers (public,private,rotected);


class myclasss{
    private static x=0;

}
//console.log(myclasss.x);//since x is private can not accessible from the outside 

//2..static member can also be inherited

class Base {
    static getGreet(){
        return 'hello world';
    }
}
class Derived extends Base{

}
console.log(Derived.getGreet());
 


//special static name 
//function properties like name,length,call are not valid to define as static member 
//E.g:---

class s{
    // static name="s!";//will using some another variable name here 
}




//why No static classes?


//static blocks in classes



//this at runtime 

class myClass{
name="MyClass";
getName(){
    return this.name;
}
}
const c=new myClass();

const obj={
    name:"obj",
    getName:c.getName,
}

console.log(obj.getName());


//generic

// function users(data: object):object
// {
//     return data;
// }

// console.log(users({name:"ajay",age:'22'}));


// function users(data: string):string
// {
//     return data;
// }

// console.log(users("ajay verma"));


function users<T>(data: T):T
{
    return data;
 }

console.log(users({name:"ajay verma",age:67}).name);//no error either we can pass number | string |object




//Parameter properties

class Param{
    constructor(public readonly x:number,protected y:number,private z:number){}

}
const a=new Param(1,3,5);
console.log(a.x);
// console.log(a.y); error 



//Abstract class 

abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void{
        console.log(this.name);
    }
    abstract find(n:string): string;
}

class Employee extends Person { 
    empCode: number;
    constructor(name: string, code: number) { 
        super(name);
        this.empCode = code;
    }
    find(name:string): string { 
        return "employee name is : "+name;
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2:string= emp.find('Steve');
console.log(emp2);//steves