class Customer{
    firstName='';
    lastName='';
    age=0;
    
    constructor(fname:string,lname:string,age:number){
      this.firstName=fname;
      this.lastName=lname;
      this.age=age;
    }
    }

 




class RefactoredCustomer{
// firstName='';
// lastName='';
// age=0;

constructor(public firstName:string,public lastName:string,public age:number){
 
}

placeOrder(productId:number){
    console.log(productId);
}
}

class GoldCustomer extends RefactoredCustomer{

}

let customer=new RefactoredCustomer('John','Doe',56);

console.log(customer.age);
customer.placeOrder(67);

let goldCustomer=new GoldCustomer('John','Doe',78);
console.log(goldCustomer.age);
goldCustomer.placeOrder(56);
