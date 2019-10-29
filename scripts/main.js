/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
/* Test code here... */
var myItem = new ToDoItem("Learn about cookies=;");
myItem.isCompleted = false;
//October 20th 2019. Month starts at 0.
myItem.deadline = new Date(2019, 9, 29);
//stringify converts any object into a JSON string format
var strData = JSON.stringify(myItem);
console.log(strData);
//Setting a cookie called 'todoitems' that expires in a week
Cookies.set("todoitems", strData, { expires: 7 });
/* END TEST CODE */
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
