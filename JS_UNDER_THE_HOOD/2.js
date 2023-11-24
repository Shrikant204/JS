
const num = 3
function multiplyBy2(inputNumber){
  const result = inputNumber*2
  return result;
}


//making new function which takes parameter as array and multiplyBy2
function copyArrayAndManipulate(array,instruction){
  const output = [] // intitaliseing output array
  array.forEach(element => {
        output.push(instruction(element))  // pushing array element in output array
  }); 
  return output;               
}


const myArray = [1,2,3] //declaration of myArray
const result=copyArrayAndManipulate(myArray,multiplyBy2)
//We are passing myArray and the multiplyBy2 function

console.log(result)

//When the for loop runs , it does not have a execution context 
//it has it's own protected namespace inside the curly braces
//for(int i=0;i<array.length;i++)


//Functions are just objects 


/*

  Callback function
  the function we insert in the other function 
  is called callback function

  Here multiplyBy2 is callback function

  Outer function
  The copyArrayAndManipulate function is our higher 
  order function because it is the outer function

  Outer function and Callback function make our code more DRY
*/

