/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        if (task == null) {
            throw ;
        }
        this.title = task;
    }
    return ToDoItem;
}());
