//Thread Of Execution

const num = 3
function multiplyBy2(inputNumber){
  const result = inputNumber*2
  return result;
}

const output = multiplyBy2(num)
const newOutput = multiplyBy2(10)

//Why do we need functions

//function definition with parameter 'array'
function copyArrayAndMultiplyBy2(array){
    const output = [] // intitaliseing output array
    array.forEach(element => {
          output.push(element/2)  // pushing array element in output array
    }); 
    return output;               
}

const myArray = [1,2,3] //declaration of myArray
const result = copyArrayAndMultiplyBy2(myArray) //storing the function output in result array

console.log(result)
//We are following DRY analogy here


