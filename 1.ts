// function add(x: number,y: number){
//     return x+y;
// }

// const result =add(5,8);

// console.log(result);

 

function add(x:any, y: any){
    return x+y;
  }
  
  let age : number=5;
  
  let lastName: string ="Ajay";
  
  let pets: string[]=[];
  pets.push("ajay");
  pets.push("this is my name ");
  // pets.push(true);//show error 
  
  
  let isLoaded:boolean =true;
  
   
  let foo=null;
  
  // age='4';
  
  lastName=age.toString();
  
  
  
  interface Customer{
    firstName:string,
    lastName:string
  }
  
  const customer : Customer={
  firstName:"Ajay",
  lastName: "Verma"
  };