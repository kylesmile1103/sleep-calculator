let sleepResult = document.getElementById("sleep-result");

function sleepNow(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    console.log(hours);
    console.log(minutes);
    // 5 cycles
    date.setMinutes(minutes + 450)
    let idealHours = 0;
    let idealMinutes = 0;
    sleepResult.innerHTML="</br>It's "+hours+":"+minutes+" now."
    + " You should <span class=\"time-result\">set your alarm at "+date.getHours()+":"+date.getMinutes()+"</span>"
    +"</br>to complete five 90-minute sleep cycles.";
    // 6 cycles
    
}