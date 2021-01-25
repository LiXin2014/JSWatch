import completedToDosArea from "./completedTodos.js";

export class ToDo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        // state can be created, started, paused, finished
        this.state = "created";
    }

    setFinishTime(finishTime){
        this.finishTime = finishTime;
        this.state = "finished";
        completedToDosArea.addFinishedTask(this.text, this.formatTime(this.startTime), this.formatTime(this.finishTime));
    }

    setStartTime(startTime) {
        this.startTime = startTime;
        this.state = "started";
    }

    formatTime(time) {
        return time.getHours() + ":"+ time.getMinutes() +":"+ time.getSeconds();
    }
}
