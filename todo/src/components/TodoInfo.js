import React, { Component } from 'react';
import './_TodoInfo.scss';

class TodoInfo extends Component{

    static defultProps = {
        todoInfo : {
            id : 0,
            todo : '입력된 값 없음'
        }
    }

    handleDelete = () =>{
        const {todoInfo, onDelete} = this.props;
        onDelete(todoInfo.id);
    }
    
    render() {

        const { todo } = this.props.todoInfo;

        return (
            <div className = "App-main">
               <div> {todo} </div>
               <button onClick = {this.handleDelete}> 삭제 </button>
            </div>
        )
    }
}

export default TodoInfo;