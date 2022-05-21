let countEl = document.getElementById("count-el")
let click = 0;
function increment() {
    click += 1;
    countEl.textContent = click;
    console.log(click)
}

function decrement() {
    click -= 1
    countEl.textContent = click;
    console.log(click)
}


let message = "You have 3 new notifications, "
let username = "per !"

let messageToUser = message + username
console.log(messageToUser)
let greetings = 'Have fun while Counting,'
let myName = " Stranger !"

let myGreeting = greetings + myName
document.getElementById("greetings").textContent = myGreeting
document.getElementById('greetings').textContent += "💙"

let showThis = document.getElementById("logentry")

function save() {
    let logs = '(' + click + ')' + ' > '
    showThis.textContent += logs
    click = click - click
    countEl.textContent = click
}
let firstNam = 'Bello'
let lastNam = 'Rasheed'
let fullNam = firstNam + ' ' + lastNam
console.log(fullNam)

function logger() {
    console.log(fullnam)
}
let myPoints = 3

function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)