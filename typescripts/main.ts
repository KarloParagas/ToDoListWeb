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

/* Test code here... */

let myItem = new ToDoItem("Learn about cookies=;");
myItem.isCompleted = false;

//October 20th 2019. Month starts at 0.
myItem.deadline = new Date(2019, 9, 29);

//stringify converts any object into a JSON string format
let strData = JSON.stringify(myItem);
console.log(strData);

const cookieKey = "todoitems";
//Setting a cookie called 'todoitems' that expires in a week
Cookies.set(cookieKey, strData, {expires : 7});

/* END TEST CODE */

//Read ToDoItem from cookie
let cookieItem:ToDoItem = JSON.parse(Cookies.get(cookieKey)); //JSON.parse converts that cookie passed, back to an object
console.log("Read cookie data...");
console.log(cookieItem.title + " " + cookieItem.deadline);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* TEST CODE: Store ToDo item using HTML5 Web Storage */

const storageKey = "Task";

if(typeof(Storage) !== "undefined"){
    localStorage.setItem(storageKey, strData);
    //the key can be whatever you want it to be for ".setItem(key: string, value: string)"
    //"task" is the name of that cookie, like an id

    let storageStr = localStorage.getItem(storageKey);
    let item:ToDoItem = JSON.parse(storageStr);
    console.log("Reading storage data...");
    console.log(item.title);
}
/* END OF TEST CODE */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};

function main(){
    //Get ToDoItem from user
    let item:ToDoItem = getItem();    

    //Display new ToDoItem on page
    displayToDoItem(item);

    //Get existing ToDos, add new one, re-save list
    let allItems = readToDoItems();
    allItems.push(item); //Add new item to existing list
    saveToDoItems(allItems);
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

const theStorageKey = "MyItems";

function saveToDoItems(items:Array<ToDoItem>){
    let stringData = JSON.stringify(items);

    localStorage.setItem(theStorageKey, stringData);
}

function readToDoItems():Array<ToDoItem>{
    let stringData = localStorage.getItem(theStorageKey);
    
    if(stringData == null){
        return new Array<ToDoItem>();
    }
    
    // let itemArray:ToDoItem[] = JSON.parse(stringData);
    // return itemArray;
    //Same as above, as a one liner
    return <ToDoItem[]>JSON.parse(stringData);
}