// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "shrikantdotcom"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shri@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);