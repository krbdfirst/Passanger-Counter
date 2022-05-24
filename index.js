let countEl = document.getElementById("count-el")
let click = 0;
function increment() {
    click += 1;
    countEl.textContent = click;
    console.log(click)
} //function for increment

function decrement() {
    if (click > 0) {
        click -= 1
    }
    countEl.textContent = click;
} //function for decrement


let showThis = document.getElementById("logentry")

function save() {
    let logs = '(' + click + ')' + ' > '
    showThis.textContent += logs
    click = click - click
    countEl.textContent = click
} //function to save the current count
