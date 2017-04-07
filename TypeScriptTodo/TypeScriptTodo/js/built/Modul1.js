//Using internal Model
var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        var TodoState;
        (function (TodoState) {
            TodoState[TodoState["New"] = 1] = "New";
            TodoState[TodoState["Active"] = 2] = "Active";
            TodoState[TodoState["Completed"] = 3] = "Completed";
            TodoState[TodoState["Deleted"] = 4] = "Deleted";
        })(TodoState = Model.TodoState || (Model.TodoState = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
var DataAccess;
(function (DataAccess) {
    let _lastId = 0;
    function generateNextId() {
        return _lastId + 1;
    }
    class TodoService {
        constructor(todos) {
            this.todos = todos;
        }
        add(todo) {
            todo.id = generateNextId();
            this.todos.push(todo);
            return todo;
        }
        deleteTodo(id) {
            var toDelete = this.getById(id);
            var index = this.todos.indexOf(toDelete);
            return false;
        }
        getById(id) {
            var filter = this.todos.filter(f => f.id == id);
            if (filter.length > 0) {
                return filter[0];
            }
            return null;
        }
        get State() {
            return this.state;
        }
        set State(newState) {
            this.state = newState;
        }
        getAll() {
            let cloned = JSON.stringify(this.todos);
            return JSON.parse(cloned);
        }
    }
})(DataAccess || (DataAccess = {}));
