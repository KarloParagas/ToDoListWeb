/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    //Fields(just like in java)
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        this.title = task;
    }   
}

let myItem = new ToDoItem("Finish class");

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};

function main(){
    //Get ToDoItem from user
    let item:ToDoItem = getItem();    

    //Display new ToDoItem on page
    displayToDoItem(item);

    //Save ToDoItem
}

/**
 * Move selected task to completed section of the webpage
 */
function markAsComplete(){
    let currItem = <HTMLDivElement>this;

    let completedItems = document.getElementById("completed");

    completedItems.appendChild(currItem);
}

/**
 * Displays ToDoItem on the page
 * @param iten 
 */
function displayToDoItem(item:ToDoItem):void{
    let div = document.createElement("div"); //createElement creates whatever element you pass in it
    div.onclick = markAsComplete;

    div.innerHTML = '<input type="checkbox">' + item.title;

    //Display new div on page
    let displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}

/**
 * Gets the user input todo item from the form
 */
function getItem():ToDoItem{
    //Get all input from form and return ToDoItem
    let title = (<HTMLInputElement>document.getElementById("title")).value;
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement>document.getElementById("deadline")).value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;

    return item;
}