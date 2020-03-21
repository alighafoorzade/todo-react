import TodoModel from "./TodoModel";
import {action, computed, decorate, observable} from "mobx";

class TodoStore {

    constructor() {
        this.displayState = 'all';
        this.lastID = 0;
        this.todos = [];
    }

    addTodo(title) {
        let todo = new TodoModel(this, this.lastID++, title, false);
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => {
            return todo.id !== id;
        });
    }

    get taskCount() {
        let count = 0;
        this.todos.map((todo) => {
            if (todo.completed === false) {
                count++;
            }
            return todo;
        });
        return count;
    }

    clearCompleted() {
        this.todos = this.todos.filter((todo) => {
            return (todo.completed === false);
        })
    }

    changeDisplay(display) {
        this.displayState = display;
    }
}

decorate(TodoStore, {
        todos: observable,
        taskCount: computed,
        displayState: observable,
        addTodo: action,
        clearCompleted: action,
        changeDisplay: action,
        removeTodo: action
    }
);

const store = new TodoStore();
export default store;