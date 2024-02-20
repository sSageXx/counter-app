let count = 0;
let countEl = document.getElementById("count-el")
let entrieNumber = 0;
let entriesEl = document.getElementById("entries-el")

function increase() {
    count++
    countEl.textContent = count
}

function save() {
    entrieNumber++
    if (entrieNumber > 1)
        entriesEl.textContent += " -"
    entriesEl.textContent += " " + count
    count = 0;
    countEl.textContent = count;
}