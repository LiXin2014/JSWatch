
import timer from "./Timer.js";
import alarm from "./alarm.js";

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
    }
    
    updateDigits(hr, min, sec, tenthOfSec) {
        this.digits.innerHTML = this.formatNumber(hr) + ":" + this.formatNumber(min) + ":" + this.formatNumber(sec) + ":" + tenthOfSec.toString();
        if(min === 30) {
            alarm.play();
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