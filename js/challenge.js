const counter = document.getElementById("counter")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")

plusButton.addEventListener("click", () => {
    counter.innerText = ++counter.innerText
})

minusButton.addEventListener("click", () => {
    counter.innerText = --counter.innerText
})

// setInterval(function(){
//     counter.innerText = ++counter.innerText
// }, 1000)