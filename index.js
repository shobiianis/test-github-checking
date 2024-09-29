

// age = 16
// studentCard = false

// age >= 18 ? console.log("allowed") 
// : studentCard === true ? console.log("allowed on std card") 
// : console.log("not allowed")



let age = '';
let studentCard=true

let status=age || studentCard
console.log(status)