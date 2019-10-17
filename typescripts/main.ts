/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    //Fields(just like in java)
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        if(task == null){
            throw;
        }
        this.title = task;
    }
}