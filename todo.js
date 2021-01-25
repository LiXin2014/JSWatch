import completedToDosArea from "./completedTodos.js";
import * as TodoStates from "./todoStates.js";

export class ToDo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        // state can be created, started, paused, finished
        this.state = TodoStates.Created;
        this.timePeriods = [];
    }

    finish(finishTime){
        if (this.state === TodoStates.Created) {
            return;
        }
        else if (this.state === TodoStates.Started) {
            this.timePeriods.push(new TimePeriod(this.startTime, finishTime));
        }
        
        this.state = TodoStates.Finished;
        completedToDosArea.addFinishedTask(this.text, this.getTotalTimeMessage(), this.getSpentTimeMessages());
    }

    start(startTime) {
        this.startTime = startTime;
        this.state = TodoStates.Started;
    }

    pause(pauseTime) {
        //this.pauseTime = pauseTime;
        this.state = TodoStates.Paused;
        this.timePeriods.push(new TimePeriod(this.startTime, pauseTime));
    }

    getToDoState() {
        return this.state;
    }

    getSpentTimeMessages() {
        var message = "";
        this.timePeriods.forEach(period => {
            message += this.formatTime(period.startTime) + " To " + this.formatTime(period.endTime) + "\n";
        });
        return message;
    }

    getTotalTimeMessage() {
        var hr = 0;
        var min = 0;
        var sec = 0;
        this.timePeriods.forEach(period => {
            hr += period.endTime.getHours() - period.startTime.getHours();
            min += period.endTime.getMinutes() - period.startTime.getMinutes();
            sec += period.endTime.getSeconds() - period.startTime.getSeconds();
        });

        var message = "";
        if (hr > 0) {
            message += hr + " hours ";
        }
        if (min > 0) {
            message += min +" minutes ";
        }
        if (sec > 0) {
            message += sec + " seconds ";
        }
        return message;
    }

    formatTime(time) {
        return time.getHours() + ":"+ time.getMinutes() +":"+ time.getSeconds();
    }
}

class TimePeriod {
    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
