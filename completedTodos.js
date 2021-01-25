class CompletedToDos {
    constructor() {
        this.completedToDosElement = document.querySelector("#completedArea");
    }

    addFinishedTask(task, totalTimeMessage, timePeriodMessage) {
        var finishedTaskDiv = document.createElement("div");
        finishedTaskDiv.innerText = "Have been doing " + task + " for " + totalTimeMessage + " : \n" + timePeriodMessage;
        this.completedToDosElement.appendChild(finishedTaskDiv);
    }
}

var completedToDosArea = new CompletedToDos();
export default completedToDosArea;