function new_click(){
    setTimeout(Please_more_clicks, 1000)
}
function Please_more_clicks(){
    let S_Number_of_clicks = document.getElementById("Number of clicks")
    let N_Number_of_clicks = Number(S_Number_of_clicks.innerText)
    N_Number_of_clicks = N_Number_of_clicks + 1
    S_Number_of_clicks.innerText = N_Number_of_clicks.toString()
    setTimeout(Please_more_clicks, 1000)
}