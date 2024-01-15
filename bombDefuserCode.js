let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let counter = 10
let uniqueid = setInterval(function() {
    console.log(counter)
    counter = counter - 1
    timerEl.textContent = counter

    if (counter === 0) {
        timerEl.textContent = "Boom!!"
        clearInterval(uniqueid)
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombdefuserText = defuserEl.value;
    if (event.key === "Enter" && bombdefuserText === "defuser" && counter !== 0) {
        timerEl.textContent = "Yod did it!!"
        clearInterval(uniqueid)
    }
})