import React,{Component} from "react";

import store from '../stores/TodoStore'

class TodoEntry extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }

    handleKeyDown = (event)=> {
        if (event.keyCode !== 13) return;
        event.preventDefault();
        store.addTodo(this.state.value)
        this.setState({
            value:''
        })
    };
    render(){
        return(
            <header className="header">
                <h1>todo</h1>
                <input
                    value={this.state.value}
                    onChange={(event)=>this.setState({value:event.target.value})}
                    onKeyDown={(event)=>this.handleKeyDown(event)}
                    className="new-todo" placeholder="What needs to be done?" autoFocus
                />
            </header>
        );
    }
}

export default TodoEntry;