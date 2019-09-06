import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoList extends Component{
    static defaultProps ={
        data : [],
        onDelete : () => console.warn('not exist data')
    };
    render(){

<<<<<<< Updated upstream
        const { data, onDelete } = this.props;
        
=======
        const { data, onDelete, onUpdate } = this.props;

>>>>>>> Stashed changes
        const list = data.map(
            todoInfo => (<TodoInfo 
                            key = {todoInfo.id} 
                            todoInfo = {todoInfo}
                            onDelete = {onDelete}        
                    />)
        )
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default TodoList;