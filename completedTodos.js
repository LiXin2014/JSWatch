class CompletedToDos {
    constructor() {
        this.completedToDosElement = document.querySelector("#completedArea");
    }

    addFinishedTask(task, startTime, endTime) {
        var finishedTaskDiv = document.createElement("div");
        finishedTaskDiv.innerText = "Have been doing" + task + " from " + startTime + " to " + endTime;
        this.completedToDosElement.appendChild(finishedTaskDiv);
    }
}

var completedToDosArea = new CompletedToDos();
export default completedToDosArea;