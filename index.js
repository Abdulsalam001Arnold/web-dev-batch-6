
let age = 39
age = 40 //reassigning
// let age = 67
console.log(age)

const drink = 'malt'

let largeNumber = BigInt(9007199254740991n)

const isTrue = true
false

let email = null

let surname;
console.error("Connection Timeout!")
console.warn("Checking logs....")

console.log(typeof drink)



//object
const person = {
    name: "Lanre",
    age: 39,
    isStudent: false
}

console.table(person.name)

const myArray = ["Lanre", 230, 0.56, false, null, undefined, {name: "Ola", age: 400, status: "poor"}]

console.table(myArray[6])


function greet() {
    console.log("Hello World")
}

greet()

//addition
let sum = 10000 - 5
let divided = 10 / 5
let multiply = 10 * 5
let remainder = 10 % 3
let exponent = 2 ** 3
console.log(exponent)


let a = 6
console.log(++a)

let goat = "Clare" === "Clare"

console.log(goat)

let sheep = 4 !== 4

console.log(sheep)

let captainHook = 0 <= 0

console.log(captainHook)


const compareNumber = 5 === 5 && 4 <= 4

console.log(compareNumber)

const useOroperator = 0 !== 0 || 4 === 4

console.log(useOroperator)

const year = new Date().getFullYear()

console.log(year)

const date = new Date().getDay()

console.log(date)

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

console.log(weekdays[date])


let schoolName = "bloomy "
let complete = ' technologies'
let resolved = schoolName.trim()
console.log(resolved.length)
console.log(resolved.toUpperCase())
console.log(resolved.includes("y"))
console.log(resolved.charAt(2))
console.log(resolved.concat(complete))

//template literal
let sentence = `I attend ${schoolName} ${complete}`
console.log(sentence)

let myNum = 34.150220475898488
let converted = myNum.toString()
console.log(typeof converted)
console.log(myNum.toFixed(2))


let myNumString = "46"

console.log(typeof Number(myNumString))


//Math Object

const random = Math.random() * 10
console.log(Math.floor(random))

const randomInteger = Math.floor(Math.random() * 100) + 1;
console.log(randomInteger)

const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

console.log(sessionId)

let decimal = 3.4
console.log(Math.round(decimal))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Math.max(...numbers))

//Types of Functions - all functions can take parameters and return values

//Function declarations - this can also be nameless - hoisted


console.log(named())

function named() {
    console.log("Named function")
    this.name = "Lanre"
    return this.name
}


//Function expressions - a nameless function declaration assigned to a variable

const expression = function() {
    console.log('This is a function expression')
}

//arrow function
const arrow = () => {
    console.log('This is an arrow function')
    this.name = "Lanre"
    return this.name
}

//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('This is IIFE')
}) ()

//Generator function

function* generator() {
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next())



//async function - asynchronous function

async function asyncFunction() {
    console.log('This is an async function')
}

//constructor function - thses are functions used with the new keyword to create objects
function constructor(name, email, password, age) {
    this.name = name
    this.email = email
    this.password = password
    this.age = age
}

const user = new constructor("Lanre", "lanre@gmail.com", "123passkey", 40)

console.log(user.name)


function clareSentence(schoolName) {
  console.log(`I like ${schoolName}`)
}

clareSentence()