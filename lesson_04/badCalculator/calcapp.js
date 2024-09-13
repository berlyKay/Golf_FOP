document.querySelector(".one").addEventListener('click', one)
document.querySelector(".two").addEventListener('click', two)
document.querySelector(".three").addEventListener('click', three)
document.querySelector(".add").addEventListener('click', add)
// document.querySelector(".subtract").addEventListener('click', subtract)
// document.querySelector(".multiply").addEventListener('click', multiply)
// document.querySelector(".divide").addEventListener('click', divide)
document.querySelector(".equals").addEventListener('click', equals)

let calcArr = []
let display = ''
let total = ''

// functions for numbers
function one() {
    display += 1
    document.querySelector(".display").innerText = display
    calcArr.push(1)
    console.log(calcArr)
}

function two() {
    display += 2
    document.querySelector(".display").innerText = display
    calcArr.push(2)
    console.log(calcArr)
}

function three() {
    display += 3
    document.querySelector(".display").innerText = display
    calcArr.push(3)
    console.log(calcArr)
}


// functions for operations

function add() {
    document.querySelector(".display").innerText = ""
    calcArr.push('+')
    display = ''
    console.log(calcArr)
}

function equals() {
    console.log(calcArr)
    
    for (let i = 0; i < calcArr.length; i++) {
        console.log(typeof(i))
    }
    document.querySelector(".display").innerText = total
}