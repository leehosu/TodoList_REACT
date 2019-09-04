import React, { Component } from 'react';
import './_TodoInfo.scss';

class TodoInfo extends Component{

    static defultProps = {
        todoInfo : {
            id : 0,
            todo : '입력된 값 없음'
        }
    }
    render() {

        const { todo } = this.props.todoInfo;

        return (
            <div className = "App-main">
               <div> {todo} </div>
            </div>
        )
    }
}

export default TodoInfo;