function change(){
    var color=Math.floor(Math.random()*9999);
    alert("theme change successfully  (maximum time white color apear so try many time)")
    body.style.background='#'+color;

}
document.getElementById('changeTheme').addEventListener('click',change);


function updateClock() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let prepand;
        if(hours<12||(hours==12 &&prepand=='pm')){
            prepand="am";
        }
        else if(hours==12){
            prepand="pm";
        }
        
        else {
            prepand="pm";
            hours=hours-12;
        }
        if(minutes<10){
            minutes="0"+minutes;
        }
        
        if(hours<10){
            hours="0"+hours;
        }
        
        if(seconds<10){
            seconds="0"+seconds;
        }
        
        const timeString = hours+"  "+":"+minutes+":"+seconds+" "+prepand;
        document.getElementById('clock').innerText = timeString;
    }

    setInterval(updateClock);
    updateClock();
