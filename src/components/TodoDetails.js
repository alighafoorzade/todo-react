import React, {Component} from "react";

import store from "../stores/TodoStore";
import {observer} from "mobx-react";
import Filters from "./Filters";

class TodoDetails extends Component {

    clearCompleted() {
        store.clearCompleted();
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{store.taskCount}</strong> item left</span>
                <Filters />
                <button
                    onClick={() => this.clearCompleted()}
                    className="clear-completed">Clear completed
                </button>
            </footer>
        );
    }
}

TodoDetails = observer(TodoDetails);

export default TodoDetails;