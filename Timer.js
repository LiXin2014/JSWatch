import stopWatch from "./script.js";

class Timer {
    constructor(){
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.tenthOfSec = 0;

         // track if the timer is started or not, to solve interval clear problem.
        // click start button twice, and then click on stop. The interval gets cleared is the second one, the timer for first one continue running.
        this.timerStarted = false;

        this.worker = new Worker("worker.js");
        this.worker.addEventListener("message", (e) => {
            stopWatch.updateDigits(e.data.hr, e.data.min, e.data.sec, e.data.tenthOfSec);
            this.hr = e.data.hr;
            this.min = e.data.min;
            this.sec = e.data.sec;
            this.tenthOfSec = e.data.tenthOfSec;
        });
    }

    startTimer() {
        // if timer is already started, simply return.
        if(this.timerStarted){
            return;
        }

        this.worker.postMessage({op: 'start', hr: this.hr, min: this.min, sec: this.sec, tenthOfSec: this.tenthOfSec});
        this.timerStarted = true;
    }

    stopTimer() {
        this.worker.postMessage({op: 'stop'});
        this.timerStarted = false;
    }

    resetTimer() {
        this.worker.postMessage({op: 'reset'});
    }

}

var timer = new Timer();
export default timer;