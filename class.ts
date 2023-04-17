// class Customer{
//     firstName='';
//     lastName='';
//     age=0;

//     constructor(fname:string,lname:string,age:number){
//       this.firstName=fname;
//       this.lastName=lname;
//       this.age=age;
//     }
//     }






// class RefactoredCustomer{
// // firstName='';
// // lastName='';
// // age=0;

// constructor(public firstName:string,public lastName:string,public age:number){

// }

// placeOrder(productId:number){
//     console.log(productId);
// }
// }

// class GoldCustomer extends RefactoredCustomer{

// }

// let customer: RefactoredCustomer=new RefactoredCustomer('John','Doe',56);

// console.log(customer.age);
// customer.placeOrder(67);

// let goldCustomer=new GoldCustomer('John','Doe',78);
// console.log(goldCustomer.age);
// goldCustomer.placeOrder(56);












//*************************************************** */
//READONLY----This modifier prevent assignment to the field outside the constructor

//implementation:---


// class World_place{
//     readonly name:string="Hello Space";

//     constructor(otherName?: string){
//         if(otherName!==undefined){
//             this.name=otherName;
//         }
//     }

//    err(){
//     //   this.name="Hello world"; --->showing error here can not override the value of name as declare with "readonly " modifier

//     }
// }


// const g=new World_place();
// // g.name="Hello "; --->Also give error here 

















//constructor--*************************

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(empcode: number, name: string) {
//         this.empCode = empcode;
//         this.empName = name;
// }

// //!Warning-->When you define a function you have one syntax and when you define a class you have another syntax...

// //To define methods in a class, you just need to declare them without the function keyword.

// // function display():void{} //Do not write function keyword here

// display():void{
//     console.log('empcode is : '+this.empCode+" empname is : "+this.empName);
// }
// }

// const employee=new Employee(789,"Thomas");
// employee.display();





//super_calls
//As in javascript if i have base class then, before using 'this' i need to call super()
//Example 1----
// class Base {
//     k:number;
//     constructor(k: number){
//         this.k=k;
//     }
// }

// class Derived extends Base{
    
//     constructor(k){
//         super(k);
//         console.log(this.k);
//     }
// }

// const demo=new Derived(78);

//Example--2

// class Person{
//     name: string;
//     constructor(name:string){
//         this.name=name;
//     }
// }

// class Employee extends Person{
//     empCode:number;
//     constructor(name:string,empcode : number){
//         super(name);
//         this.empCode=empcode;
//     }
 
//     displayName():void{
//         console.log("Name = "+this.name+ " -employee code is : "+this.empCode);

//     }
// }
// const newEmp=new Employee("Alva",897);
// newEmp.displayName();





//Important ---
//inside a method body, it is still mandatory to access fields and other methods via this..
// let x:number=0;

// class C{
//     x: string ="hello";

//     m(){
//       //  x="world";  //here it will try to reassign the vale of x in line no 174;
//      //correct way

//      this.x="worlld";
//     }
// }




//Getter and Setters
//getter and setter must have same (visibility-->public,private,protected)

// class Thing {
//     _size=0; //means size property is private here ('_')

// get size():number
// {
//     return this._size;
// }

// set size(value: string | number | boolean)
// {
//     let num=Number(value);//change value to a type number here 


//     if(!Number.isFinite(num)){
//         this._size=0;
//         return;
//     }
//     this._size=num;
// }

// }

// const thing=new Thing();
// thing.size=90;
// console.log(thing.size);




//index signature

//example:-1
// let sample: any={}
// sample['case']='World'
// console.log(typeof(sample['case']));


//implements clauses

interface Pingable{
    ping():void;
}

class Sonar implements Pingable{
    ping(): void {
        console.log("ping!");
    }
}

// class Ball implements Pingable{
//     pong(){

//     }
//}



















export { };