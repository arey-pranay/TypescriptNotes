Typescript is most useful for debugging purposes.
On running, it compiles down to javascript

let _var-name_ : _type_ = _value_

string, number, boolean

To compile into javascript
tsc filename

If you do not explicitly mention type in the declaration, it itself infers the type

If you wanna escape this inference thing, you use the *any* type
let k:any = "some string";
k = 9;
When you declare a var without defining it, it infers by default any

Annotation in function parammeter
  function funct (x:number){
  return number+2
}
optional parameters to the functions
 function funct (x:number = 5){
   return num+2
 }

Annotation in function return-type
  function funct (x):number{
  return number+2
}
