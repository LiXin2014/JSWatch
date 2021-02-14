import timer from "./Timer.js";
import alarm from "./alarm.js";

class Interval {
   constructor() {
       this.hourInputElement = document.querySelector("#hour");
       this.hour = parseInt(this.hourInputElement.value);
       this.hourInputElement.addEventListener("input", () => {
           this.hour = parseInt(this.hourInputElement.value);
        });

       this.minInputElement = document.querySelector("#min");
       this.min = parseInt(this.minInputElement.value);
       this.minInputElement.addEventListener("input", () => {
           this.min = parseInt(this.minInputElement.value);
        });

       var stopAlarmButton = document.querySelector("#stopAlarm");
       stopAlarmButton.addEventListener("click", () => {
           alarm.stop();
           timer.stopTimer();
           timer.resetTimer();
        });
   } 
}

var interval = new Interval();
export default interval;