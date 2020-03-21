import React,{Component} from "react";
import {observer} from "mobx-react";
import store from "../stores/TodoStore";

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    onToggle=()=>{
        this.props.todo.toggle();
    };
    render() {
        const {todo} = this.props;
        return(
            <li className={todo.completed?'completed':''}>
                <div className="view">
                    <input
                        onChange={this.onToggle}
                        className="toggle" type="checkbox"
                        checked={todo.completed}
                    />
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={()=>store.removeTodo(todo.id)}/>
                </div>
            </li>
        );
    }
}
TodoItem = observer(TodoItem);
export default TodoItem;