/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish class");
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    //Get ToDoItem from user
    var item = getItem();
    //Display new ToDoItem on page
    displayToDoItem(item);
    //Save ToDoItem
}
/**
 * Move selected task to completed section of the webpage
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
/**
 * Displays ToDoItem on the page
 * @param iten
 */
function displayToDoItem(item) {
    var div = document.createElement("div"); //createElement creates whatever element you pass in it
    div.onclick = markAsComplete;
    div.innerHTML = '<input type="checkbox">' + item.title;
    //Display new div on page
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Gets the user input todo item from the form
 */
function getItem() {
    //Get all input from form and return ToDoItem
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
