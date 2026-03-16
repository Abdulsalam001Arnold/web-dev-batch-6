
// let success = false

//microtask
// const myPromise = new Promise((resolve, reject) => {
//     if(success) {
//         resolve("Promise has been resolved")
//     }else{
//         reject("Promise has been rejected")
//     }
// })


// myPromise.then((resolve) => {
//     console.log(resolve)
// }).catch((reject) => {
//     console.log(reject)
// })

// console.log("Wema and Clare fought online")

// //macrotask
// setTimeout(() => {
//     console.log("I run once after a delay.")
// }, 0)

// setInterval(() => {
//     console.log("I run repeatedly after a delay.")
// }, 0)

// console.log("Habeeb and Ebube are in the gym")

// const arrayItems = [1, 2, 3, 4, 5, 6, 7, 8]

// arrayItems.map((item) => console.log(item * 2))


const fetchItem = async function() {

    try{
        const response = await fetch('https://dragonball-api.com/api/characters')
        const data = await response.json()
        const items = await data.items
    
        console.log(items)
    
        items.map((item, index) => (
            console.log(`${index + 1}: ${item.name}`)
        ))
    }catch(err) {
      console.error(err)
    }
}

fetchItem()