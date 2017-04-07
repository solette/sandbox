(function () {
    var TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Completed"] = 3] = "Completed";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
    var cont = document.getElementById("container");
    /*
    class TodoService {
        state: TodoState;

        static lastTodo: number = 0;

        get State() {
            return this.state;
        }

        set State(newState) {
            this.state = newState;
        }

        constructor(private todos: Todo[]) {
        }

        getAll() {
            return this.todos;
        }

        static getNextId() {
            return this.lastTodo + 1;
        }
    }
    var td = new TodoService(null);
    console.log(td.getAll());
    */
    /*

    class TodoChangeState {
        constructor (private newState: TodoState) {

        }

        CanChangeState(todo: Todo) : boolean {
            return !!todo;
        }

        ChangeState(todo: Todo): Todo {
            if (this.CanChangeState(todo)) {
                todo.state = this.newState;
            }
            return todo;
        }
    }

    class CompleteTodoStateChanger extends TodoChangeState {
        constructor() {
            super(TodoState.Active);
        }

        CanChangeState(todo: Todo): boolean {
            return super.CanChangeState(todo);
        }
    }

    */
    class TodoChangeState {
        constructor(newState) {
            this.newState = newState;
        }
        ChangeState(todo) {
            if (this.CanChangeState(todo)) {
                todo.state = this.newState;
            }
            return todo;
        }
    }
    class CompleteTodoStateChanger extends TodoChangeState {
        constructor() {
            super(TodoState.Active);
        }
        CanChangeState(todo) {
            return !!todo && (todo.state == TodoState.Active ||
                todo.state == TodoState.Completed);
        }
    }
    function clone(value) {
        let json = JSON.stringify(value);
        return JSON.parse(json);
    }
    var todo = { Name: "kalle", Adress: "Sveav.", Num: 10 };
    //console.log(clone(todo));
    var arrv = [1, 2, 3];
    class KeyValuePair {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }
    let kv = new KeyValuePair("Ahmad", 122);
    //console.log(kv);
    let k = new KeyValuePair("", new Date(Date.now));
    class KeyValuePairPrinter {
        constructor(pairs) {
            this.pairs = pairs;
        }
        print() {
            for (let i of this.pairs) {
                console.log(`${i.key}  :  ${i.value}`);
            }
        }
    }
    let x = new KeyValuePair("", 122);
    let y = new KeyValuePairPrinter([kv]);
    y.print();
    function Total(t1, t2) {
        var total = t1.length + t2.length;
        return total;
    }
    console.log(Total('ahmad', 'jaber'));
})();
