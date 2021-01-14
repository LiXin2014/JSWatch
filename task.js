import timer from "./Timer.js";
import alarm from "./alarm.js";

class Task {
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

       this.taskDescription = document.querySelector("#taskDes").value;

       var starttaskButton = document.querySelector("#startTask");
       starttaskButton.addEventListener("click", timer.startTimer.bind(timer));

       var stopAlarmButton = document.querySelector("#stopAlarm");
       stopAlarmButton.addEventListener("click", () => {
           alarm.stop();
           timer.stopTimer();
           timer.resetTimer();
        });
   } 
}

var task = new Task();
export default task;