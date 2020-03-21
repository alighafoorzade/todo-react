import React, {Component} from 'react';

import TodoEntry from './components/TodoEntry'
import TodoItems from "./components/TodoItems";
import TodoDetails from "./components/TodoDetails";

import './App.css';

class App extends Component {
    render() {
        return (
            <div id="root">

                <section className="todoapp">
                    <TodoEntry />
                    <TodoItems />
                    <TodoDetails />
                </section>
            </div>
        );
    }
}
export default App;
