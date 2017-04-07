"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _lastId = 0;
function generateNextId() {
    return _lastId + 1;
}
var TodoService = (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        todo.id = generateNextId();
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.deleteTodo = function (id) {
        var toDelete = this.getById(id);
        var index = this.todos.indexOf(toDelete);
        return false;
    };
    TodoService.prototype.getById = function (id) {
        var filter = this.todos.filter(function (f) { return f.id == id; });
        if (filter.length > 0) {
            return filter[0];
        }
        return null;
    };
    Object.defineProperty(TodoService.prototype, "State", {
        get: function () {
            return this.state;
        },
        set: function (newState) {
            this.state = newState;
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.getAll = function () {
        var cloned = JSON.stringify(this.todos);
        return JSON.parse(cloned);
    };
    return TodoService;
}());
