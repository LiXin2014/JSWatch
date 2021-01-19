export class ToDos {
    constructor() {
        this.addToDoInput = document.querySelector("#addTodo");
        this.addToDoInput.addEventListener("keydown", this.onAddTodoInputKeyDown.bind(this));

        this.areaToAddToDo = document.querySelector("#todos");

        this.todoList = [];
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
            var checkboxId = "todo" + (this.todoList.length + 1);
            checkbox.setAttribute("id", checkboxId);
            todo.appendChild(checkbox);

            // create label
            var label = document.createElement("label");
            label.setAttribute("for", checkboxId);
            label.innerText = this.addToDoInput.value;
            todo.appendChild(label);

            // add to do item to the list, and clear out the input.
            this.todoList.push({id: this.todoList.length+1, text: this.addToDoInput.value});
            this.addToDoInput.value = "";
        }
    }
}