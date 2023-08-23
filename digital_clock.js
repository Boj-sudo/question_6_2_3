function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours();
    var minutes = d1.getMinutes();
    var seconds = d1.getSeconds();
    var zone = "AM";

    // Write the code here
    function updateClock() {
        seconds++;

        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if(minutes === 60) {
            minutes = 0;
            hours++;
        }

        if(hours === 24) {
            hours = 0;
        }

        // Convert to 12-hour format and set AM/PM
        if(hours >= 12) {
            zone = "PM";
        }

        if(hours > 12) {
            hours -= 12;
        }

        console.log(hours + ":" + minutes + ":" + seconds + " " + zone);
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    
    // Initial call to display the clock immediately
    updateClock();
}

myDigitalClock();