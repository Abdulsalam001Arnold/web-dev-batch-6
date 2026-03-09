

const user = {
    name: "Lanre",
    email: "[EMAIL_ADDRESS]",
    password: "123passkey",
    age: 40,
    isStudent: false
}

console.log(user.name)
console.log(user.email)
console.log(user.password)
console.log(user.age)
console.log(user.isStudent)

const {name, email, password, age, isStudent} = user
console.log(`My name is ${name}, I am ${age} years old, I am a student: ${isStudent}, my email is ${email}, and my password is ${password}`)

//object methods
let keys = Object.keys(user)

console.log(keys)

console.log(user["name"]) //get value using bracket notation

let values = Object.values(user)

console.log(values)


let entries = Object.entries(user)

console.log(entries)


const items = ["Fox", "COD", "fortnite", "arc raider", "eafc26"]

//Mutating array methods
items.push("GTA")
items.pop()
items.unshift("Stray", "Spiderman")
items.shift()
items.splice(3, 1, "Red Dead Redemption")
console.log(items)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const sorted = numbers.sort((a, b) => (
    b - a
))

console.log(sorted)


// Non-mutating array methods
const cities = ["Lagos", "Lisbon", "Madrid", "Vienna", "London", "Belgrade"]

//concatenation
const combined = numbers.concat(cities)
console.log(combined)

const sliced = cities.slice(1, 3)
console.log(sliced)
console.log(cities)
console.log(`I have been to the following cities: ${cities.join(", ")}`)
console.log(cities.indexOf("Belgrade"))
console.log(cities.includes("Budapest"))
console.log(cities.at(2))

//Iteration array methods
numbers.forEach((num) => console.log(num / 2))

numbers.map((num) => console.log(num * 2)) 

const filtered = numbers.filter((num) => (num > 5))

console.log(filtered)

const find = numbers.find((num) => {
    return num > 5
})

console.log(find)

const reduced = numbers.reduce((acc, val) => (acc + val), 0)

console.log(reduced)

const checkSome = numbers.some((num) => (
    num > 5
))

console.log(checkSome)

const checkEvery = numbers.every((num) => (
    num > 5
))

console.log(checkEvery)



const apiData = [
  {id:1, name:'Wireless Headphones', price:59.99,  category:'electronics', rating:4.5, qty:12},
  {id:2, name:'Coffee Maker',        price:89.99,  category:'kitchen',     rating:4.8, qty:0 },
  {id:3, name:'Running Shoes',       price:119.99, category:'sports',      rating:4.2, qty:7 },
  {id:4, name:'Bluetooth Speaker',   price:39.99,  category:'electronics', rating:4.6, qty:25},
  {id:5, name:'Yoga Mat',            price:29.99,  category:'sports',      rating:3.9, qty:15},
];

const filterByQty = apiData.filter((item) => {
    return item.qty === 0
})

console.log(filterByQty)

const mappedCard = apiData.map((item) => {
    return {
        name: item.name,
        price: item.price.toFixed(2),
        rating: item.rating,
    }
})

console.log(mappedCard)


const checkElectronics = apiData.filter((item) => {
    return item.category === "electronics"
})

console.log(checkElectronics)

//Logical statements - if/else, else if, switch statements, ternary operators - shortcut for if/else

    // if(condition) {
    //     //code here
    // }else{
    // //code here
    // }


    // if(condition1) {
    //     //code heere
    // }else if(condition2) {
    //     //code here
    // }else if(condition3) {
    //     //code here
    // }else{
    //     //code here
    // }

    const aged = 1000

    if(aged < 18) {
        console.log("You are a minor")
    }else if(aged >= 18 && aged < 60) {
        console.log("You are an adult")
    }else{
        console.log("You are a senior citizen")
    }

    const checkAge = aged < 18 ? "You are a minor" : aged >= 18 && aged < 60 ? "You are an adult" : "You are a senior citizen"

    console.log(checkAge)

    switch (aged) {
        case 18:
            console.log("You are 18")
            break;

            case 60:
                console.log("You are 60")
                break;
    
        default:
            console.log("You are neither 18 nor 60")
            break;
    }

    const score = 29

    switch (true) {
        case score >= 70:
            console.log("Grade A")
            break;

            case score >= 60:
                console.log("Grade B")
                break;

                case score >= 50:
                    console.log("Grade C")
                    break;

                    case score >= 40:
                        console.log("Grade D")
                        break;

                        case score < 30:
                            console.log("Grade F")
                            break;

                            default:
                                console.log("Invalid score")
                                break;
    }