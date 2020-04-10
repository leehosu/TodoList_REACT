import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';

class TodoInfo extends Component{
    static defaultProps ={
        data : [],
        onDelete : () => console.warn('not exist data'),
        onUpdate : () => console.warn('not exist data')
    };
    render(){

        const { data, onDelete, onUpdate } = this.props;

        const list = data.map(
            todoInfo => (<TodoList 
                            key = {todoInfo.id} 
                            todoInfo = {todoInfo}
                            onDelete = {onDelete}
                            onUpdate = {onUpdate}
                    />)
        )
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default TodoInfo;
