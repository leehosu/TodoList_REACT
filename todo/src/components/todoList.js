import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoList extends Component{
    static defaultProps ={
        data : []
    };
    render(){

        const { data } = this.props;
        const list = data.map(
            todoInfo => (<TodoInfo key = {todoInfo.id} todoInfo = {todoInfo} />)
        )
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default TodoList;