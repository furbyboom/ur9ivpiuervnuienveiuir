running = false
main()
function start_timer() {
    if (localStorage.getItem("time") == undefined){
        localStorage.setItem("time", "0")
    }
    if (running == false) {
        setTimeout(count, 1000)
        running = true
    }
}
function stop_timer(){
    location.reload()
}
function reset_timer(){
    localStorage.setItem("time", "0")
    let n = Number(localStorage.getItem("time"))
    counter.innerText = n.toString()
}
function count(){
    let n = Number(localStorage.getItem("time"))
    n = n + 1;
    let counter = document.getElementById("counter")
    counter.innerText = n.toString()
    localStorage.setItem("time", n.toString())
    setTimeout(count, 1000)
}
function main(){
    let n = Number(localStorage.getItem("time"))
    counter.innerText = n.toString()
}
