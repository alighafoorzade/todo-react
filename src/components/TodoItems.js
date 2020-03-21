import React, {Component} from "react";

import TodoItem from "./TodoItem";
import store from "../stores/TodoStore";
import {observer} from "mobx-react";

class TodoItems extends Component {
    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        store.todos.filter((todo) => {
                            switch (store.displayState) {
                                case 'active':
                                    return ( todo.completed === false );
                                case 'completed':
                                    return (todo.completed === true);
                                default:
                                    return true;
                            }
                        }).map((todo, index) => {
                            return (
                                <TodoItem key={index} todo={todo}/>
                            );
                        })}
                </ul>
            </section>
        );
    }
}

TodoItems = observer(TodoItems);
export default TodoItems;