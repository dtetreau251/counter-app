
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let dashedCount = count + " - ";
    saveEl.textContent += dashedCount; 
    countEl.textContent = 0;
    count = 0;
}

function erase () {
    saveEl.textContent = "Other Bars: ";
    countEl.textContent = 0;
    count = 0;
}