let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toString());
//console.log(myDate.toTimeString());
//console.log(myDate.toUTCString()); 
//console.log(myDate.getTimezoneOffset()); 

let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleStribg('default',{
    weekday:"long",
    timeZone: ''
})