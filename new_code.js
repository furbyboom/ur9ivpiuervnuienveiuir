let please_dont_repeat = false
function furby_click(){
    if (please_dont_repeat == false){
        setTimeout(furbies, 1000)
        please_dont_repeat = true
    }
}
function furbies(){
    let dump = document.getElementById("furby")
    let random_furby = ["furby boom", "furby 90's", "furby 2005", "furby connect"]
    let new_furby = random_furby[Math.floor(Math.random() * random_furby.length)]
    dump.innerText = new_furby
    setTimeout(furbies, 1000)
}