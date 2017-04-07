"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
