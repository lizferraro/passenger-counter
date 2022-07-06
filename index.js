let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let countTotal = document.getElementById("count-total")
let total = count

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    total += count
    countTotal.innerText = total
    count = 0
    countEl.innerText = count
}

console.log("Let's count the number of people!")