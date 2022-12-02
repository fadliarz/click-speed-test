var total_clicks = 0;

function doIncrement(){
    if(total_clicks == 0){
        setTimeout(showResult, 10000)
    }
    total_clicks++;
}

function showResult(){
    document.getElementById("increment-button").style.display = "none";
    document.getElementById("result").innerHTML = 
    "Result: <br>" + total_clicks/10 + " CPS";
}