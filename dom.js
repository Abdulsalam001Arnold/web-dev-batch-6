

// const title = document.getElementById('title')

const title = document.querySelector('#title')
const container = document.querySelector('#container')
console.log(title)


//Modifying elements
title.textContent = "This is dynamic"

container.innerHTML = `<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim atque veniam tempora aspernatur sint obcaecati nemo modi unde aperiam nesciunt. Animi ex praesentium temporibus excepturi illo cumque autem quod perspiciatis sunt odio beatae ipsum voluptatibus explicabo modi, saepe recusandae quas? Dignissimos cupiditate eos doloribus harum deserunt officiis ad mollitia autem quo architecto. Eaque optio excepturi aperiam minus tempora alias natus ipsum nihil fuga distinctio cumque, fugiat asperiores quo voluptate quisquam similique, quis repellat est atque aliquid. Blanditiis, voluptatibus a quasi obcaecati repellendus harum deserunt modi corporis qui maxime inventore tempore quia rem ab laboriosam quidem? Veritatis provident placeat quae quaerat?</p>`

container.style.color = "red"
container.style.width = "500px"
container.style.height = "500px"
container.style.backgroundColor = "blue"
container.style.padding = "10px"
container.style.borderRadius = "10px"


const link = document.getElementById('link')

link.setAttribute('href', 'https://react-batch5.vercel.app/')

//Creating and removing elements

const image = document.createElement('img')

image.src = "https://dragonball-api.com/characters/bulma.webp"
image.alt = "Bulma"

document.body.appendChild(image)

// image.remove()


const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    alert('Button has been clicked')
    image.remove()
})

const form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
     event.preventDefault()
     const name = event.target.elements.name.value
     const email = event.target.elements.email.value
     const password = event.target.elements.password.value

     if(email !== "" && password !== "") {
        alert("Form submitted successfully")
     }

     alert("Email and password are required")
})