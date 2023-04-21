

// function assertIsNumber(val : any): asserts val is number{
// if(typeof val!=="number"){
//   throw new Error("Not a number!");
// }
// }


// function double(input : any){
//     assertIsNumber(input);

//     return input*2;
// }

// console.log(double("fjd"));






// function assertInRange(age: number,min: number,max: number): asserts age is number{
//   if(age<min || age>max){
//     throw new Error("your are not eligible");
//   }
// }

// function validate(n: number){
//    assertInRange(n,18,25);
   
//    fillForm();
// }

// function fillForm(){
//   console.log("you can fill the form");
// }

// validate(12);



function isletter(char: string): boolean {
  return char.toUpperCase() !== char.toLowerCase();
}

function isdigit(char: string): boolean {
  return /\d/.test(char);
}



function validated(var_name:string):boolean{
  if(!var_name)
  {
    return false;
  }
  let first=var_name.charAt(0);
  if(!isletter(first)&& first!='_'&& first!='$'){
    return false;
  }
  for(let i=0;i<var_name.length;i++){
    let f=var_name.charAt(i);
    if(!isletter(f)&& !isdigit(f) && f!=='_' && f!=='$')
    {
      return false;
    }
  }
  return true;
}




function assertVariable(variable_Name:string): asserts variable_Name is string{
  if(!validated(variable_Name)){
   throw new Error("Enter a valid variable name as per the rule ");
  }

}



function carry(varr:string){
  assertVariable(varr);
  console.log("Now you can assign value here ");
}

carry("#dhsjj123");


















