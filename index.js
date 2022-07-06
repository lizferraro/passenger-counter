let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

//log out count when called

let countTotal = document.getElementById("count-total")

let total = count

function save() {
    total = total + count
    countTotal.innerText = total
    console.log(total)
    count = 0
    countEl.innerText = count
}