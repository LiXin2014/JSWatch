 // import stopWatch from "./script.js";   This is wrong, why?   error message: can not use import outside a module.
// add this file because the timer won't work properly if the tab is inactive. 
 // https://www.youtube.com/watch?v=pMK-jcOAYI8&ab_channel=techsith
 // https://medium.com/@abhi9bakshi/why-javascript-timer-is-unreliable-and-how-can-you-fix-it-9ff5e6d34ee0

this.onmessage = function(e) {
    if (e.data.op === 'start') {
        this.hr = e.data.hr;
        this.min = e.data.min;
        this.sec = e.data.sec;
        this.tenthOfSec = e.data.tenthOfSec;

        this.interval = setInterval(() => {
            this.tenthOfSec++;

            if(this.tenthOfSec == 10){
                this.tenthOfSec = 0;
                this.sec++;
            }
            if(this.sec == 60){
                this.sec = 0;
                this.min++;
            }
            if(this.min == 60){
                this.min = 0;
                this.hr++;
            }

            this.postMessage({hr: this.hr, min: this.min, sec: this.sec, tenthOfSec: this.tenthOfSec});
        }, 100);
    } 
    else if (e.data.op === 'stop') {
        clearInterval(this.interval);
    }
    else if (e.data.op === 'reset') {
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.tenthOfSec = 0;
        this.postMessage({hr: this.hr, min: this.min, sec: this.sec, tenthOfSec: this.tenthOfSec});
    }
}