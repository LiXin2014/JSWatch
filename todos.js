import {ToDo} from "./todo.js";
import timer from "./Timer.js";

export class ToDos {
    constructor() {
        this.addToDoInput = document.querySelector("#addTodo");
        this.addToDoInput.addEventListener("keydown", this.onAddTodoInputKeyDown.bind(this));

        this.areaToAddToDo = document.querySelector("#todos");

        //this.todoList = [];
        this.todoMap = new Map();
    }

    onAddTodoInputKeyDown(event) {
        // if Enter is pressed
        if (event.keyCode === 13) {
            console.log("enter is pressed");
            console.log("text entered: ", this.addToDoInput.value);

            // create todo item container
            var todo = document.createElement("div");
            todo.setAttribute("id", "todoitem");
            this.areaToAddToDo.appendChild(todo);

            // create checkbox
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            var checkboxId = "todo" + (this.todoMap.size + 1);
            checkbox.setAttribute("id", checkboxId);
            todo.appendChild(checkbox);

            // create label
            var label = document.createElement("label");
            label.setAttribute("for", checkboxId);
            label.innerText = this.addToDoInput.value;
            todo.appendChild(label);

            // create startTaskButton
            var startButton = document.createElement("button");
            //startButton.setAttribute("type", "button");
            startButton.textContent = "start";
            //startButton.setAttribute("value", "start");
            
            todo.appendChild(startButton);
            
            // add to do item to the list, and clear out the input.
            //this.todoList.push({id: this.todoList.length+1, text: this.addToDoInput.value});
            //this.todoList.push(new ToDo(checkboxId, this.addToDoInput.value));
            this.todoMap.set(checkboxId, new ToDo(checkboxId, this.addToDoInput.value));
            this.addToDoInput.value = "";

            // add event listener on checkbox to handle check uncheck.
            checkbox.addEventListener("click", this.finishTodo.bind(this, checkbox, label, startButton, checkboxId));

            startButton.addEventListener("click", this.startTodo.bind(this, startButton, checkboxId));
        }
    }

    finishTodo(checkbox, label, startButton, checkboxId) {
        if (checkbox.checked) {
            console.log(checkboxId, "finished");
            label.classList.toggle("finishedToDo");
            startButton.disabled = true;
            var finishedTodo = this.todoMap.get(checkboxId);
            //var now = new Date().now;
            finishedTodo.setFinishTime(new Date());
        }
        else {
            console.log(checkboxId, "unchecked");
            label.classList.toggle("finishedToDo");
            startButton.disabled = false;
        }
    }

    startTodo(startButton, checkboxId) {
        //if (checkbox.checked) {
            console.log(checkboxId, "started");
            
            startButton.textContent = "pause";
            var startedTodo = this.todoMap.get(checkboxId);
            //var now = new Date().now;
            startedTodo.setStartTime(new Date());
            timer.startTimer();
    }
}