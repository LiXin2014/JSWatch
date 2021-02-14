
import timer from "./Timer.js";
import alarm from "./alarm.js";
import interval from "./interval.js";
import { ToDos } from "./todos.js";

class StopWatch {

    constructor(){
        this.digits = document.querySelector("#digits");

        var startButton = document.querySelector("#start");
        var stopButton = document.querySelector("#stop");
        var resetButton = document.querySelector("#reset");

        // remember to bind here. It is important! WHy though?
        // https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/
        // https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
        startButton.addEventListener("click", timer.startTimer.bind(timer));
        stopButton.addEventListener("click", timer.stopTimer.bind(timer));
        resetButton.addEventListener("click", timer.resetTimer.bind(timer));
        
        this.todos = new ToDos();

        // set number of intervals
        this.numOfIntervals = 0;
        this.numOfIntervalElement = document.querySelector("#numOfIntervals");
        this.numOfIntervalElement.textContent = this.numOfIntervals;
    }
    
    updateDigits(hr, min, sec, tenthOfSec) {
        this.digits.innerHTML = this.formatNumber(hr) + ":" + this.formatNumber(min) + ":" + this.formatNumber(sec) + ":" + tenthOfSec.toString();

        var checkHour = interval.hour === hr;
        var checkMin = interval.min === min;
        var alarmIsSet = interval.hour !== 0 || interval.min !== 0;

        if(alarmIsSet && checkHour && checkMin && sec === 0) {
            alarm.play();
            timer.stopTimer();
            this.numOfIntervals++;
            this.numOfIntervalElement.textContent = this.numOfIntervals;
        }
    }

    formatNumber(number) {
        if(number < 10){
            return "0" + number;
        }
        return number;
    }
}

var stopWatch = new StopWatch();
export default stopWatch;