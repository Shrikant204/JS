//Functions with memories
 

/*
When our function finishes executing ,it's local memory is deleted except 
for the return value

That's why we use function with memories
which is function inside another function 




*/

function createFunction(){
  function multiplyBy2 (num){
    return num*2
  }
  return multiplyBy2 
}

const generatedFunc = createFunction()//initialising generatedFunc

//After the above line there is no execution context of createFunction
//i.e now generatedFunc has no  relation to createFunction but related to multiplyBy2 function 
//because the createFunction is now executed and it's local memory has been deletd , but the output, i.e its
//multiplyBy2 is returned which can be used in global execution context
const result = generatedFunc(3)


//Calling a function in the same function call as it was defined

function outer (){
  let counter = 0
  function incrementCounter (){
    counter++;
  }
  incrementCounter();
}
outer();
