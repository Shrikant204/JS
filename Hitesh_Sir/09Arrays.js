//array 

const myArr = [ 0,1,2,3,4,5,6,true,'Ash']

console.log(myArr[0]);

const myHeroes = ["shaktiman", "Hero"]
console.log(myHeroes[1]);

console.log(myArr)
myArr.push(60)
console.log(myArr)
myArr.pop();

console.log(myArr)
//myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr)

const newArr = myArr.join()

console.log(typeof newArr)

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);