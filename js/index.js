let postButton = document.getElementById("postTodo");
postButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todoText = document.getElementById("todoText");
    let todoList = document.getElementById("todoList");
    todoList.innerHTML +=
        "<input type=\"checkbox\" value=\"" + todoText.value + "\">" +
        todoText.value + "<br>";
});


let clearButton = document.getElementById("clearTodo");
clearButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todoListChildren = document.getElementById("todoList").children;
    for (i = 0; i < todoListChildren.length; i++) {
        todoListChildren[i].checked = false;
    }
});

let markAllButton = document.getElementById("markAllTodo");
markAllButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todoListChildren = document.getElementById("todoList").children;
    for (i = 0; i < todoListChildren.length; i++) {
        todoListChildren[i].checked = true;
    }
});

let deleteButton = document.getElementById("deleteTodo");
deleteButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todoText = document.getElementById("todoText");
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
});