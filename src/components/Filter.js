import React,{Component} from "react";

import store from "../stores/TodoStore";
import {observer} from "mobx-react";

class Filter extends Component{

    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    changeDisplay(event, display) {
        store.changeDisplay(display);
    }


    render() {
        return(
            <li onClick={(event)=>this.changeDisplay(event,this.props.children)}>
                <a
                    className={ store.displayState === this.props.children ? 'selected':'' }>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

Filter = observer(Filter);

export default Filter;