let hscore=0
let gscore=0

let homeScore = document.getElementById("homeDisplay")
let guestScore = document.getElementById("guestDisplay")

function add1h(){
    hscore += 1
    homeScore.textContent = hscore

}
function add2h(){
    hscore += 2
    homeScore.textContent = hscore

}
function add3h(){
    hscore += 3
    homeScore.textContent = hscore

}
function add1g(){
    gscore += 1
    guestScore.textContent = gscore

}
function add2g(){
    gscore += 2
    guestScore.textContent = gscore

}
function add3g(){
    gscore += 3
    guestScore.textContent = gscore

}
function reset(){
    hscore=0
    homeScore.textContent = hscore
    gscore=0
    guestScore.textContent = gscore

}

