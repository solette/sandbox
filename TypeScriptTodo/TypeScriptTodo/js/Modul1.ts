//Using internal Model
namespace TodoApp.Model {

    export enum TodoState {
        New = 1,
        Active,
        Completed,
        Deleted
    }
}
namespace TodoApp.Model {

    export interface Todo {
        id: number;
        Name: string;
        state: TodoState;
    }
}

namespace DataAccess {

    import Model = TodoApp.Model;
    import Todo = Model.Todo;
    import TodoState = Model.TodoState;

    export interface ITodoService {
        add(todo: Todo): Todo;
        deleteTodo(id: number): boolean; 
        getAll(): Todo[];
        getById(todoId: number): Todo;
    }

    let _lastId: number = 0;

    function generateNextId() {
        return _lastId + 1;
    }

    class TodoService implements ITodoService {
        state: TodoState;
       
        add(todo: Todo) {
            todo.id = generateNextId();
            this.todos.push(todo);
            return todo;
        }

        deleteTodo(id: number) {
            var toDelete = this.getById(id);
            var index = this.todos.indexOf(toDelete);
            return false;
        }

        getById(id: number) {
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
        constructor(private todos: Todo[]) {
        }

        getAll(): Todo[] {
            let cloned = JSON.stringify(this.todos);
            return JSON.parse(cloned);
        }

    }

}


