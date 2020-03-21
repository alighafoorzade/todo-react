import React, {Component} from "react";
import Filter from "./Filter";

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'all'
        }
    }


    render() {
        let filters = ['all', 'active', 'completed']
        return (
            <ul className="filters">
                {
                    filters.map((filter,index) => {
                        return (
                            <Filter key={index} >{filter}</Filter>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Filters;